import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_HOME_URL } from "../config";

export const Card = ({ action }) => (
  <div className="card">
    <h1>{action?.text}</h1>
  </div>
);

const findCollectionId = (restaurant)=>{
  const urlObject = new URL(restaurant?.action?.link); // Create a URL object
  const params = new URLSearchParams(urlObject.search); // Extract query parameters
  return params.get('collection_id'); // Get the 'collection_id' value
}

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [swiggy, setswiggy] = useState([]);
  const [filderData, setFilterData] = useState([]);

  useEffect(() => {
      fetchData();
      console.log("Please Help. react-router-dom calling me again and agian!")
  }, []);

  const fetchData = async () => {
    try{
      const data = await fetch(SWIGGY_HOME_URL);
      const json = await data.json();
      setswiggy(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setFilterData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }catch(err){
      console.error("error in fetchData ", err);
    }
  };

  const handleSearch = () => {
    const searchData = swiggy.filter((data) => {
      if (data?.action?.text?.toLowerCase().includes(searchText.toLowerCase())) return data;
    });
    setFilterData(searchData);
  };

  // const [flag, setFlag] = useState("true");
  // const flagHandle = () => {
  //     if(flag == "true")
  //          setFlag("false")
  //     else
  //         setFlag("false");
  // }
  return swiggy?.length > 0 ? (
    <div>
      {/* <div>
        <h1>{flag}</h1>
        <button onClick={flagHandle}>Toggle</button>
      </div> */}

      <input
        type="text"
        placeholder="search restaurant"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSearch}>
        search
      </button>

      <div id="card-body">
        {filderData.length>0 ? filderData?.map((restaurant) => {

          const collectionId = findCollectionId(restaurant);

          return <Link to= {`/collections/${collectionId}`} key={collectionId} > <Card {...restaurant} /> </Link>;
        }) : <h1>No Data Found!</h1>}
      </div>
    </div>
  ) : (
    <Shimmer/>
  );
};

export default Body;

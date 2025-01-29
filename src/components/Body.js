import React, {useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_HOME_URL } from "../config";
import useSwiggyData from "./useSwiggyData";
import userContext from "../utils/UserContext";

export const Card = ({ restaurant, user }) => (
  <div class="w-48 bg-yellow-100 m-2 text-xl ">
    <h1 className="font-bold">{restaurant?.action?.text}</h1>
    <ul className="text-sm">
      <li>{user.name}</li>
      <li>{user.mail}</li>
    </ul>
  </div>
);

const findCollectionId = (restaurant) => {
  const urlObject = new URL(restaurant?.action?.link); // Create a URL object
  const params = new URLSearchParams(urlObject.search); // Extract query parameters
  return params.get("collection_id"); // Get the 'collection_id' value
};

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const { swiggy, filderData, setFilterData } = useSwiggyData();

  const {user, setUser} = useContext(userContext);

  const handleSearch = () => {
    const searchData = swiggy.filter((data) => {
      if (data?.action?.text?.toLowerCase().includes(searchText.toLowerCase()))
        return data;
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
      <div class=" m-3">
        <input
        class="bg-green-300"
          type="text"
          placeholder="search restaurant"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        ></input>
        <button class="bg-green-300 m-3 hover:bg-slate-400 rounded-md" type="submit" onClick={handleSearch}>
          search
        </button>
        <input
        class="bg-gray-300 p-3 m-3"
          type="text"
          placeholder="update context name"
          value={user.name}
          onChange={(e) => setUser({
            name: e.target.value,
            mail: "sujay@gmail.com"
          })}
        ></input>
        <input
        class="bg-gray-300 p-3 m-3"
          type="text"
          placeholder="update context mail"
          value={user.mail}
          onChange={(e) => setUser({
            name: "Sujay",
            mail: e.target.value
          })}
        ></input>
      </div>
      <div class="flex flex-wrap">
        {filderData.length > 0 ? (
          filderData?.map((restaurant) => {
            const collectionId = findCollectionId(restaurant);
            return (
              <Link to={`/collections/${collectionId}`} key={collectionId}>
                {" "}
                <Card restaurant={restaurant} user={user}  />{" "}
              </Link>
            );
          })
        ) : (
          <h1>No Data Found!</h1>
        )}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;

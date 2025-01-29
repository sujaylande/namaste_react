import { useEffect, useState } from "react";
import { SWIGGY_HOME_URL } from "../config";

const useSwiggyData = () => {
  const [swiggy, setswiggy] = useState([]);
  const [filderData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("Please Help. react-router-dom calling me again and agian!");
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_HOME_URL);
      const json = await data.json();
      setswiggy(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setFilterData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (err) {
      console.error("error in fetchData ", err);
    }
  };
  return { swiggy, filderData, setFilterData };
};

export default useSwiggyData;

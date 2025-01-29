import { useEffect, useState } from "react";
import { SWIGGY_SITE, SWIGGY_QUERY } from "../config";

const useCollection = (collectionId) => {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const item = await fetch(SWIGGY_SITE+collectionId+SWIGGY_QUERY);
        const json = await item.json();
        setData(json?.data?.cards[0]?.card?.card);
    }

    return data;
}

export default useCollection
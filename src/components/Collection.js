import {useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useCollection from "../utils/useCollection";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const Collection = () => {
    const {collectionId} = useParams(); //destructure on the fly
    const data = useCollection(collectionId); //custom hook
    //no need to write state here for data

    const [isAdded, SetisAdded] = useState(false);

    const dispatch = useDispatch();       

    const handleAddCart = (data)=> { 
        dispatch(addItem(data));
    }
    const handleRemoveCart = (data)=> { 
        dispatch(removeItem(data))
    }

    return ( Object.keys(data).length !== 0 ?
        <div className="bg-yellow-50 m-32">
            <h1 className="text-lg">collectionId: {data?.collectionId}</h1>
            <h1 className="text-lg">Title: {data?.title}</h1>
            <h1 className="text-lg">Description: {data?.description}</h1>
            {!isAdded? <button className="bg-green-300" onClick={()=>{handleAddCart(data); SetisAdded(true)}}>AddToCart</button>
            : <button className="bg-red-300" onClick={()=>{handleRemoveCart(data); SetisAdded(false)}}>RemoveFromCart</button>}
        </div> : <Shimmer/>
    )
}

export default Collection;
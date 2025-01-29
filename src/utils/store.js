import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cartSlice";

const store = configureStore({ //API
    reducer:{
        cart: cardSlice,
        //... we can write other slice here
    }
});

export default store;


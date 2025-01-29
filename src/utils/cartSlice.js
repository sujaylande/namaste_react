import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({ //API
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: { // reducers is pural
        addItem: (state, action) => {
            state.items.push(action.payload);//action is singular
        },
        removeItem: (state, action) => {
            //state.items.pop();
            const res = state.items.filter(
                (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
              );
            state.items = res;

        },
        clearCart: (state) => {
            state.items = [] 
        },
    },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions; //actions is pural

export default cartSlice.reducer; //reducer is singular
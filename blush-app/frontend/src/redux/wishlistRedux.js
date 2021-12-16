import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState :{
        products: [],
        quantity:0,
    },
    reducers:{
        addProductWish:(initialState,action)=>{
            initialState.quantity += 1;
            initialState.products.push(action.payload);
        },
        wishlistEmpty:(initialState) =>{
            initialState.products = [];
            initialState.quantity = 0; // inside cart
        },
},
});

export const { addProductWish,wishlistEmpty } = wishlistSlice.actions;
export default wishlistSlice.reducer;
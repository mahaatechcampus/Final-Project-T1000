import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        products: [],
        quantity:0, // inside cart
        total:0, 
    },
    reducers:{
        addProduct:(initialState,action)=>{
            initialState.quantity += 1;
            initialState.products.push(action.payload);
            initialState.total += action.payload.price * action.payload.quantity;
        },
        cartEmptyifPayed:(initialState) =>{
            initialState.products = [];
            initialState.quantity = 0; // inside cart
            initialState.total = 0;
        },
        deleteProduct: (initialState, action) => {
            initialState.products.splice(initialState.products.findIndex((item)=> item._id === action.product._id),1);
            initialState.quantity -=1;
            initialState.total -= action.product.price

        }
},
});

export const { addProduct,cartEmptyifPayed,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
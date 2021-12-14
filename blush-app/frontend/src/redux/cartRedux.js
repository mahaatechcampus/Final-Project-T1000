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
        // removeProduct:(initialState,action)=>{
        //     let array = [...initialState.products];
        //     let id=action.payload.id;
        //     let indexId  = array.indexOf(id)
        //     if (indexId !== -1) {
        //         array.splice(indexId, 1);
        //     }
        //     initialState.products = array;
        //     initialState.quantity -= 1;
        //     initialState.total -= action.payload.price * action.payload.quantity;
        // }
    }
    
  
});

export const {addProduct,removeProduct} = cartSlice.actions
export default cartSlice.reducer;
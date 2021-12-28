import {createSlice} from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1300,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', MySwal.stopTimer)
    toast.addEventListener('mouseleave', MySwal.resumeTimer)
    }
});
const wishlistSlice = createSlice({
    name : "wishlist",
    initialState :{
        products: [],
        quantity:0,
    },
    reducers:{
        addProductWish:(initialState,action)=>{
            if(initialState.products.filter(p => p._id === action.payload._id).length > 0){
                Toast.fire({
                  icon: "warning",
                  title: "This product is already in the Wishlist",
                });
              }
              else{
            initialState.quantity += 1;
            initialState.products.push(action.payload);
            Toast.fire({
                icon: "success",
                title: "Added to Wishlist Successfully",
            });}
        },
        removeProduct:(initialState,action)=>{
            initialState.quantity -= 1;
            console.log(action.payload)
            console.log(initialState.products.findIndex((item)=> item._id === action.payload))
            initialState.products.splice(initialState.products.findIndex((item)=> item._id === action.payload),1);
        },
    
        wishlistEmpty:(initialState) =>{
            initialState.products = [];
            initialState.quantity = 0; // inside cart
        },
},
});

export const { addProductWish,wishlistEmpty, removeProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;
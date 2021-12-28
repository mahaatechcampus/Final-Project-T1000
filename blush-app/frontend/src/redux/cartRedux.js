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
const cartSlice = createSlice({
    name : "cart",
    initialState :{
        products: [],
        quantity:0, // inside cart
        total:0, 
    },
    reducers:{
        addProduct:(initialState,action)=> { 
          if(initialState.products.filter(p => p._id === action.payload._id).length > 0){
            Toast.fire({
              icon: "warning",
              title: "This product is already in the Cart",
            });
          }
          else{
            initialState.quantity += 1;  
            initialState.products.push(action.payload);
            initialState.total += action.payload.price * action.payload.quantity;
            Toast.fire({
                icon: "success",
                title: "Added to Cart Successfully",
              });}
        },

        cartEmptyifPayed:(initialState) =>{
            initialState.products = [];
            initialState.quantity = 0; // inside cart
            initialState.total = 0;
        },
        deleteProduct: (initialState, action) => {
            initialState.products.splice(initialState.products.findIndex((item)=> item._id === action.payload._id),1);
            initialState.quantity -=1;
            initialState.total -= action.payload.price

        }
},
});

export const { addProduct,cartEmptyifPayed,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
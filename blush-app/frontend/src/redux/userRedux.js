import {createSlice} from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Toast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', MySwal.stopTimer)
    toast.addEventListener('mouseleave', MySwal.resumeTimer)
  }
});

const userSlice = createSlice({
    name : "user",
    initialState :{
        currentUser: null,
        isFetching: false,
        error:false
    },
    reducers:{
        loginStart:(initialState)=>{
            initialState.isFetching = true;
        },
        loginSuccess:(initialState,action)=>{
            initialState.isFetching = false;
            initialState.currentUser = action.payload;
            Toast.fire({
                icon: "success",
                title: "Signed in successfully",
              });
        },
        loginFailure:(initialState)=>{ //if user name or password is incorrect , or wrong in api
            initialState.isFetching = false;
            initialState.error= true;
            Toast.fire({
                icon: "error",
                title: "Wrong username or password",
              });
        },
        logoutuser:(initialState) => {
            initialState.currentUser = null;
        },
        signup:(initialState,action)=>{
            initialState.isFetching = false;
            initialState.currentUser = action.payload;
        },
    },
});

export const {loginStart,loginSuccess,loginFailure,logoutuser,signup} = userSlice.actions
export default userSlice.reducer;
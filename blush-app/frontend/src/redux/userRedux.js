import {createSlice} from "@reduxjs/toolkit";

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
        },
        loginFailure:(initialState)=>{ //if user name or password is incorrect , or wrong in api
            initialState.isFetching = false;
            initialState.error= true;
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
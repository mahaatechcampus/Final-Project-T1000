import {loginFailure, loginStart,loginSuccess,signup} from "./userRedux";
import {deleteProduct} from "./cartRedux";
import axios from "axios";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/login",user)
        dispatch(loginSuccess(res.data))
        
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const register = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/register",user)
        dispatch(signup(res.data))
        
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const deleteProductt = async (id, dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/carts/${id}`);
      dispatch(deleteProduct(id));
    } catch (err) {
    }
  };




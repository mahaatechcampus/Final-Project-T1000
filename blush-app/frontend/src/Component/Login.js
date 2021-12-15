import React,{useState} from 'react'
import {Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { login } from '../redux/apiCalls';
import { useNavigate } from 'react-router';

function Login() {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch,{username,password});
    };
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    user && navigate('/') 
    
    return (
    <div>
    <div className="lg:flex">
  <div className="lg:w-1/2 xl:max-w-screen-sm">
    {/* <div className="py-12   lg:bg-color11 flex justify-center lg:justify-start lg:px-12">

    </div> */}
    <div className="mt-36  px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-36 xl:px-24 xl:max-w-2xl">
      <h2
        className="text-center text-4xl  text-color3  font-medium lg:text-left xl:text-5xl
              xl:text-bold"
      >
        Sign In
      </h2>
      <div className="mt-12">

        <form >
          <div className="container">
            <div className="text-sm font-bold text-color3 tracking-wide">
              Username
            </div>
            <input
              className="w-full text-lg py-2 border-b border-color12 text-color5 focus:outline-none focus:border-color2"
              onChange={(e)=> setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className=" container mt-8 pl-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-color3 tracking-wide">
                Password
              </div>

            </div>
            <input
              className="w-full text-lg py-2 text-color5 border-b  border-color12 focus:outline-none focus:border-color2"
              onChange={(e)=> setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-10 pl4">
            <button
            className="bg-color1 border border-color1 text-color11 p-4 w-full rounded-md tracking-wide
            font-medium text-2xl font-display focus:outline-none focus:shadow-outline hover:bg-transparent  hover:text-color1
            shadow-lg "
            onClick={(e)=>handleClick(e)}
            disabled={isFetching}
            >
              Login
            </button>
            {error && <p className="my-12  text-lg font-display font-semibold text-center text-color9" > Something Went Wrong ! </p>}
          </div>
        </form>
        <div className="my-12  text-sm font-display font-semibold text-color3 text-center">
          Don't have an account ?{" "}
          <Link to="/register" className="cursor-pointer text-indigo-600 hover:text-color1">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  </div>


  <div className="hidden lg:flex items-center justify-center bg-color11 flex-1 h-screen">
    <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
      <img className="w-5/6 mx-auto" src="/Blush logo.png" alt="" />
    </div>
  </div>


</div>
</div>
    )
}

export default Login

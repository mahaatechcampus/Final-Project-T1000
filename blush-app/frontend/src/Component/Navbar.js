import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
        {/* header navbar */}
        <div className='py-4 shadow-sm bg-color11 '>
            <div className='container flex items-center justify-between'>
                {/* Logo */}
                <Link to='/'>
                <img
            src={"/Blush logo.png"}
            width="120"
            height="75"
            alt="Blush Store"/> 
                </Link>
                {/* SearchBar */}
                <div className='w-full max-w-xl relative flex'>
                <span className="absolute left-4 top-3 text-lg text-color12"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg></span>
                <input type="text" className="w-full border border-color1 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="Search"/>
                <button className="bg-color1 border border-color1  text-color11 px-8 rounded-r-md hover:bg-transparent hover:text-color1 transition">Search</button>
                </div>

                {/* icons */}
                <div className="flex item-center text-center space-x-8">
                    <Link to="" className="text-center text-color12 hover:text-color1 transition relative">
                        <div className="text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></div>
                        <div className="text-xs leading-3">Wishlist</div>
                        <span className=" absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-color10 text-color11 text-xs">9</span>
                    </Link>

                    <Link to="" className="text-center text-color12 hover:text-color1 transition relative">
                    <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg></div>

                    <div className="text-xs leading-3">Cart</div>
                    <span className=" absolute right-0 left-6 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-color10 text-color11 text-xs">9</span>
                    </Link>

                    <Link to="" className="text-center text-color12 hover:text-color1 transition relative">
                    <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-2xl ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div>

                    <div className="text-xs leading-3 text-center">Account</div>
                    </Link>
                </div>
            </div>
        </div>



        {/* bottom Navbar */}
        <div className="bg-color1">
            <div className="container flex h-10">
                <div className="flex items-center justify-center flex-grow ">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link to="/products/eye" className="text-color11 hover:text-color3 transition" >Eye</Link>
                        <Link to="/products/face" className="text-color11 hover:text-color3 transition" >Face</Link>
                        <Link to="/products/lip" className="text-color11 hover:text-color3 transition" >Lip</Link>
                        {/* <Link to="" className="text-color11 hover:text-color3 transition" >New</Link> */}
                    </div>
                </div>
            </div>
        </div>


{/* Live chating here */}
        {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                <Link title="Follow me on twitter" to="https://www.twitter.com/asad_codes" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
                </Link>
            </div>
        </div> */}
</>
    )
}

export default Navbar;
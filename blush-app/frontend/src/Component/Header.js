import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
        {/* header background */}
        <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage:"url(https://images.unsplash.com/photo-1512207855369-643452a63d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1383&q=80)" }}>
            <div className="container">
                <h1 className="text-6xl text-color11 font-medium mb-4 capitalize">Best Collection ... </h1>
                <p>
                    lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet
                </p>
            </div>
            <div className="mt-12">
                <Link to="" className="bg-color5 border border-color5 text-color11  ml-32 px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-color5">
                    SHOPE NOW
                </Link>
            </div>
        </div>

        {/* features section */}
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">

                {/* single feature */}
                <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">Free Delivery</h4>
                    <p className="text-sm text-color4">Order Over 300 SAR</p>
                </div>
                </div>

                    {/* single feature */}
                    <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">Money Returns</h4>
                    <p className="text-sm text-color4">30 Days Money Returns</p>
                </div>
                </div>
                    {/* single feature */}
                    <div className="border border-color1  rounded-md  px-3 py-6 flex justify-center items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 object-contain text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                <div>
                    <h4 className="font-medium capitalize text-lg text-color5 ">24 / 7 Support</h4>
                    <p className="text-sm text-color4">Customer Support</p>
                </div>
                </div>
            </div>
        </div>

        {/* Categories */}
        <div className="container py-16">
            <div className="grid grid-cols-3 gap-3">
                {/* single category */}
            <div className="relative rounded-md overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1583241800698-e8ab01830a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full  h-full" alt="Eye"/>
                <Link to="" className="absolute inset-0 bg-color6 bg-opacity-40 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Eye</Link>
            </div>  
                 {/* single category */}
                 <div className="relative rounded-md overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full h-full" alt="Eye"/>
                <Link to="" className="absolute inset-0 bg-color6 bg-opacity-40 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Face</Link>
            </div> 
                 {/* single category */}
                 <div className="relative rounded-md overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80" className="w-full h-full" alt="Eye"/>
                <Link to="" className="absolute inset-0 bg-color6 bg-opacity-40 flex items-center justify-center text-4xl text-color11 font-roboto font-medium group-hover:bg-opacity-60 transition">Lip</Link>
            </div> 

            </div>
          

        </div>

        </>
    )
}

export default Header

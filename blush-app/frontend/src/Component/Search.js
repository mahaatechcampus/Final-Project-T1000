import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import { useParams } from 'react-router';
import axios from "axios";


function Search() {

    const {searchTerm} = useParams();
    const [products,setProducts] = useState([]);


    useEffect(() => {
        const searchProducts =  async() =>{
            try {
                const res = await axios.get(`http://localhost:8080/api/products/search/${searchTerm}`);
                setProducts(res.data.products)  
                console.log(res.data.products)
            } catch (error) {}
        }
        searchProducts()
    },[searchTerm]);


    return (
        <>
            {/* shop wrapper */}
            <div className="container grid grid-cols-3 gap-6  pt-20 pb-16 items-start">
            {/* products */}
        <div className="col-span-3">
        <div className="grid grid-cols-3 gap-6">

        {products && products.map((item) => (
            <div className="bg-color11 shadow rounded overflow-hidden group ">
            {/* product image */}
            <div className="relative" >
                <img src={item.image_key} alt="nyx product"className="w-full" />
                <div className="absolute inset-0 bg-color3 bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link to={`/product/${item._id}`} className="text-color11  text-lg rounded  bg-color1 flex items-center justify-center hover:bg-color12 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg></Link>

                <Link to="" className="text-color11  text-lg rounded  bg-color1 flex items-center justify-center hover:bg-color12 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg></Link>
                </div>  
            </div>
            {/* //  end product img  */}

            {/* Product content */}
    
            <div className ="pt-4 pb-3 px-4 ">
                <Link to ={`/product/${item._id}`}>
                    <h4 className="font-medium text-l mb-2 text-color3 hover:text-color1 transition">{item.name} </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                    <p className="text-xl text-color10 font-semibold">{item.price} SAR</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-color13">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    </div>
                </div>
            </div>
        <Link to="" className="block w-full py-1 text-center text-color11 bg-color10 border border-color10 rounded-b hover:bg-transparent hover:text-color10 transition">
        Add To Cart
        </Link>
        </div> ))} 
        </div>
        </div>
        </div>
        </>
    
    )
}

export default Search ;

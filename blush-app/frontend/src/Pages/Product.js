import React from 'react'
import {Link,useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {addProduct} from "../redux/cartRedux";
import {addProductWish} from "../redux/wishlistRedux";
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";

function Product() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1)
    const user = useSelector((state) => state.user.currentUser);
    const i = 0;
    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);

    useEffect(() =>{ 
        const getProducts = async() =>{
                try {
                    const res = await axios.get("http://localhost:8080/api/products");
                        setProducts(res.data.slice(0, 4))  
                } catch (error) {}
            } 
                getProducts()
        },[]) 

    useEffect(() =>{
    const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/products/find/" + id)
                setProduct(res.data);
            } catch (error) {
            }
        }
        getProduct();
    },[id])

    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity - 1)
        }
        else{
            setQuantity(quantity + 1)
        }
    }

    const handleAddToCart = ()=>{
    user ? dispatch(
    addProduct({...product,quantity, price:product.price * quantity})
        ) :
        Swal.fire({
            title: "You must be logged in",
            text: "Redirecting to Login Page",
            icon: "warning",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2200,
            timerProgressBar: true,
            didClose: () => {
                navigate("/login");}
            }); 
    };

    const handleAddToWish = ()=>{
        user ? dispatch(
            addProductWish({...product})
            ) :
            Swal.fire({
                title: "You must be logged in",
                text: "Redirecting to Login Page",
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2200,
                timerProgressBar: true,
                didClose: () => {
                    navigate("/login");}
                }); 
        };


    if (!Object.keys(product).length) return <div>Loading</div>;

    return (
        <>
        {/* // product view */}
        <div className="container grid grid-cols-2 gap-6 pt-20 ">
            {/* product img */}
            <div>
            <img src={product.image_key}  className="w-full h-4/5 rounded-md " alt=""/>
            {/* <div className="grid grid-cols-5 gap-4 mt-4 ">
            <img src={product.image_key}  className="w-full cursor-pointer border border-color10" alt=""/>
            <img src={product.image_key}  className="w-full cursor-pointer border " alt=""/>
            <img src={product.image_key}  className="w-full cursor-pointer border " alt=""/>
            <img src={product.image_key}  className="w-full cursor-pointer border " alt=""/>
            </div> */}
            </div>

            {/* product content */}
            <div>
                <h2 className="text-2xl text-color3 font-medium mb-2 ">{product.name}</h2>
                <div className="flex items-center mb-4">
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
                    <div>
                        <p className="text-color4 font-semibold space-x-2">
                            <span>Avilability:</span>
                            <span className="text-color1">{product.inStock? "In Stock" :"Out of Stock"}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-color4 font-semibold ">Brand:</span>
                            <span className="text-color1">{product.brand[i].name}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-color4 font-semibold ">Category:</span>
                            <span className="text-color1 uppercase">{product.categories[i]}</span>
                        </p>
                    </div>

                    <div className="mb-1 font-roboto mt-4 ">
                        <p className='text-xl text-color10 font-semibold'>{product.price} SAR </p>
                    </div>

                    {/* quantity  */}
                    <div className=" mt-4">
                        <h3 className="text-sm text-color4 mb-1">Quantity:</h3>
                        <div className="flex border border-color12 text-color12 divide-x divide-color12 w-max">
                            <div onClick={()=> handleQuantity("dec")} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div className="h-8 w-8 text-xl flex items-center justify-center text-color4">{quantity}</div>
                            <div onClick={()=> handleQuantity("inc")} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>

                    {/* cart button */}
                    <div className="flex gap-3 border-b border-color12 pb-5 mt-6">
                        <Link to=""onClick={()=> handleAddToCart()}  className="bg-color10 border border-color10 text-color11 px-8 py-2 font-medium rounded flex items-center gap-2 hover:bg-transparent hover:text-color10 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                        </svg>
                        Add to Cart 
                        </Link>

                        <Link to="" onClick={()=> handleAddToWish()} className=" border border-color12 text-color14 px-8 py-2 font-medium rounded flex items-center gap-2  hover:text-color10 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Wishlist
                        </Link>
                    </div>
                    {/* fetuers */}
                    <div className="flex gap-3 mt-4">
                        <Link to="" className="text-color14  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                        </svg>  100% Genuine Brands
                        </Link>

                        <Link to="" className="text-color14  flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>   Fast Delivery
                        </Link>

                    </div>
            </div>
        </div>



       {/* New Arrival */}
       <div className="container pb-16">
            <h2 className="text-2xl font-medium text-color5 uppercase mb-6">Top New Arrival</h2>
            {/* product Grid */}
            <div className="grid grid-cols-4 gap-6">
                {/* single product */}
                {products.map((item) => (
            <div className="relative bg-color11 shadow rounded overflow-hidden group ">
            {/* product image */}
            <div className="relative" >
                <img src={item.image_key} alt="nyx product"className="w-full" />
                <div className="absolute inset-0 bg-color3 bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link to={`/product/${item._id}`} className="text-color11  text-lg rounded  bg-color1 flex items-center justify-center hover:bg-color12 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg></Link>

                <Link to="" onClick={()=> handleAddToWish(item)} className="text-color11  text-lg rounded  bg-color1 flex items-center justify-center hover:bg-color12 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg></Link>
                </div>  
            </div>
            {/* end product img */}

            {/* Product content */}
    
            <div className ="pt-4 pb-3 px-4 ">
                <Link to ={`/product/${item._id}`}>
                    <h4 className="font-medium text-l mb-2 text-color3 hover:text-color1 transition">{item.name} </h4>
                </Link>
                <div className="flex items-baseline mb-20 space-x-2 font-roboto">
                    <p className="text-xl text-color10 font-semibold">{item.price} SAR</p>
                </div>
                <div className="flex absolute  bottom-16 items-center">
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
        <Link to="" onClick={()=> handleAddToCart(item)}className="absolute bottom-0  block w-full px-8 py-2 text-center text-color11 bg-color10 border border-color10 rounded-b hover:bg-transparent hover:text-color10 transition">
        Add To Cart
        </Link>
        </div>
        
                ))}
                </div></div>
             
        </>
    )
}

export default Product

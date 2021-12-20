import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { logoutuser } from '../redux/userRedux';
import {addProduct} from "../redux/cartRedux";
import { useNavigate } from 'react-router';
import axios from "axios";
import {userRequest} from './requestMethode';

function ProductsAdmin() {
    const user = useSelector((state) => state.user.currentUser);
    const [products,setProducts] = useState([]);


// Get Products
    useEffect(() =>{ 
    const getProducts = async() =>{
            try {
                const res = await axios.get("http://localhost:8080/api/products");
                    setProducts(res.data)  
            } catch (error) {}
        } 
            getProducts()
    },[products]) 

    //delete product
    const deleteProduct = async (id)=> {
    try {
    const res = await userRequest.delete(`/products/${id}`)
    products.splice(products.findIndex((item)=> item._id === id),1);
    console.log(res)
    }
    
    catch (error) {}
};




    return (
        <div>
            {/* account wrapper */}
            <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
                {/* sidebar */}
                <div className="col-span-3">
                    {/* account profile */}
                    <div className="px-4 py-3 shadow flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=" 
                            className="rounded-full w-14 h-14 border border-color1 p-1 object-cover "
                            alt="avatar"/>
                        </div>

                        <div className="flex-grow">
                            <p className="text-color14 "> Hello,</p>
                            <h4 className="text-color10 font-medium">{user.user.username} </h4>
                        </div>
                    </div>
                    {/* account prof. end */}
                    {/* profile links */}
                    <div className="mt-6 bg-color11  text-left shadow rounded p-4 divide-y divided-gray-200 space-y-4 text-color12">
                        {/* single link  */}
                        <div className="space-y-1 pl-8">
                            
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize focus:text-color10 transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            </span>
                                Home
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize focus:text-color10 transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            </span>
                                Analystics
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize focus:text-color10 transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            </span>
                                Sales
                            </Link>
                        </div>

                            {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize focus:text-color10 transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            </span>
                            Users 
                            </Link>
                            <Link to={<ProductsAdmin/>}
                            className="relative text-color14  hover:text-color10 block font-medium capitalize focus:text-color10 transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                            </span>
                            Products
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                            </svg>
                            </span>
                            Transactions
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                            </span>
                            Reports
                            </Link>
                        </div>

                            {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                            </span>
                            Manage 
                            </Link>

                        </div>

                             {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link 
                            to=""
                            // onClick={()=> handleClick()}
                            className="relative text-color14  hover:text-color10 block font-medium capitalize transition focus:text-color10">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            </span>
                            Logout 
                            </Link>
                        </div>

                    </div>
                </div>
        
            {/* sidebarend */}
                <div className="col-span-9 space-y-4">
                <Link to="/dashboard/products/add"  className=" flex gap-2 ml-auto w-44 justify-center px-2 py-2  bg-color10 border border-color10 text-color11 font-medium rounded  hover:bg-transparent hover:text-color10 transition"> Add New product</Link>

                {/* single product */}
                {products && products.map((product)=>(

                <div className="flex items-center justify-between gap-6 p-4 border border-color12 rounded">
                   {/* img product */}
                    <div className="w-28  flex-shrink-0">
                        <img src={product.image_key} className="w-full" alt="wishlist img product"/>
                    </div>
                    {/* Products content */}
                    <div className="w-1/3">
                        <h2 className="text-color3 text-md font-medium">{product.name}</h2> 
                        <p className="text-color4 text-sm"> Availability: <span className="text-color1" >In Stock</span> </p>
                    </div>
                    <div className="text-color10 text-md font-semibold">{product.price} SAR</div>
                    <Link to={`/dashboard/products/${product._id}`}  className="px-2 py-2 bg-color10 border border-color10 text-color11 font-medium rounded flex items-center gap-2 hover:bg-transparent hover:text-color10 transition"> Edit</Link>
                    <div onClick={() => deleteProduct(product._id)} className="text-color14  cursor-pointer hover:text-color10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    </div>

                </div>
                ))}

            </div>
        </div>
        </div>
    )
}

export default ProductsAdmin

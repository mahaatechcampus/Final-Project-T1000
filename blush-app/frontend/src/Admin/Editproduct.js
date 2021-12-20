import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { useNavigate,useParams } from 'react-router';
import {userRequest} from './requestMethode';
import axios from "axios";
import { logoutuser } from '../redux/userRedux';

function Editproduct() {
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [brandd,setBrand] = useState("");
    const [img,setImg] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [productById,setProductById] = useState({})
    const [newProduct,setNewProduct] = useState({
        brand: [{name: brandd, key: brandd }],
        image_key : img,
        name : name,
        price : price,
        categories:[category,brandd]
    })
    const navigate = useNavigate();

    const handleClick = ()=>{
        dispatch(
        logoutuser()
        )
    };
  // Get ProductID
    useEffect(() =>{ 
    const getProducts = async() =>{
            try {
                const res = await axios.get(`http://localhost:8080/api/products/find/${id}`);
                    setProductById (res.data) ;
                    console.log(productById)
            } catch (error) {}
        } 
            getProducts()
        },[id]) 

        
    const updateProduct = async () => {
    console.log()
    try {
        const res = await userRequest.put(`/products/${id}`, newProduct );
        console.log(res.data)
    }

    catch (error) {}
    };

if (!productById) return <div>Loading</div>;

    return (

        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            {user ?
            <> 
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
                            
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            </span>
                                Home
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                            </svg>
                            </span>
                                Analystics
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
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
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            </span>
                            Users 
                            </Link>
                            <Link to="/dashboard/products"
                            className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
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
                            onClick={()=> handleClick()}
                            className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
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
                {productById ? 
            <div className="col-span-9">
            <div className=" min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-color11 mx-8 md:mx-0 shadow rounded-md sm:p-10">
                <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                    <div className="block pl-2 font-semibold text-xl self-start text-color1">
                    <h2 className="leading-relaxed">Edit the Product</h2>
                    </div>
                </div>
                <div className="divide-y divide-color12">
                    <div className="py-8 text-base leading-6 space-y-4 text-color14 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                        <label className="leading-loose">Product Name</label>
                        <input defaultValue={productById ? productById.name:""} onChange={(e)=>{newProduct.name = e.target.value; setNewProduct({...newProduct})}} type="text" className="px-4 py-2 border focus:ring-color1 focus:border-color1 w-full sm:text-sm border-color14 rounded-md focus:outline-none text-color5" placeholder="Product Name" />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Product Brand</label>
                        <input defaultValue= {productById.brand} onChange={(e)=>{newProduct.brand = [{name:e.target.value,key:e.target.value}]; setNewProduct({...newProduct})}}
                        type="text" className="px-4 py-2 border focus:ring-color1 focus:border-color1 w-full sm:text-sm border-color14 rounded-md focus:outline-none text-color5" placeholder="Product Brand" />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Product Category </label>
                        <input defaultValue={productById.categories} onChange={(e)=>{newProduct.categories = [e.target.value,brandd]; setNewProduct({...newProduct})}} type="text" className="px-4 py-2 border focus:ring-color1 focus:border-color1 w-full sm:text-sm border-color14 rounded-md focus:outline-none text-color5" placeholder="(Lip, Eye, Face)" />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Product Price</label>
                        <input defaultValue={productById ? productById.price:""} onChange={(e)=>{newProduct.price = e.target.value; setNewProduct({...newProduct})}} type="text" className="px-4 py-2 border focus:ring-color1 focus:border-color1 w-full sm:text-sm border-color14 rounded-md focus:outline-none text-color5" placeholder="Product Price" />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Product Image URL</label>
                        <input defaultValue={productById ? productById.image_key:""}
                        onChange={(e)=>{newProduct.image_key = e.target.value; setNewProduct({...newProduct})}}
                        type="text" className="px-4 py-2 border focus:ring-color1 focus:border-color1 w-full sm:text-sm border-color14 rounded-md focus:outline-none text-color5" placeholder="https://img.com/...." />
                      </div>
                      <div className="flex items-center space-x-4">
                      </div>
                    </div>
                    <div className="pt-4 flex items-center space-x-4">
                      <button onClick={()=> navigate('/dashboard/products')} className="flex justify-center items-center w-full text-color14 px-4 py-3 rounded-md focus:outline-none">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> Cancel
                      </button>
                       <button  onClick={()=> updateProduct()} className="bg-color10 flex justify-center items-center w-full text-color11 px-4 py-3 rounded-md focus:outline-none">Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>: <p>loading</p>}
            </> : <div> Sorry Should be Login {navigate("/login")} </div>
        
    }
            </div>      
             
      )
  }

export default Editproduct

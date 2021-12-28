import { useState, useEffect,createRef} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { logoutuser } from '../redux/userRedux';
import {addProduct} from "../redux/cartRedux";
import { useNavigate } from 'react-router';
import axios from "axios";
import {userRequest} from './requestMethode';
import Swal from "sweetalert2";

function ProductsAdmin() {
    const productsRef = createRef(null);

    const user = useSelector((state) => state.user.currentUser);
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openModal,setOpenmodal] = useState(false);
    const [brandd,setBrand] = useState("");
    const [img,setImg] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [product,setProduct] = useState({
      brand: [{name: brandd, key: brandd }],
      image_key : img,
      name : name,
      price : price,
      categories:[category,brandd]
    })
  
  const addProduct = async () => {
    console.log(product)
    try {
      const res = await userRequest.post(`/products`, product);
    console.log(res)  
    setOpenmodal(false);
   
    Swal.fire({
    title: "Product added successfully",
    text: "Redirecting to Products",
    icon: "success",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    // didClose: 
    //   navigate("/dashboard/products");
    });
    
    
      // products.push(product);
      }
          
    catch (error) {}
};

    //logout
    const logout = ()=>{
    dispatch(
    logoutuser()
    )
};

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
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true,
            confirmButtonColor: '#EF626A',
            cancelButtonColor: '#C6C6C6',
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
        const res = userRequest.delete(`/products/${id}`)
        products.splice(products.findIndex((item)=> item._id === id),1);
        console.log(res)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    

    }
    
    catch (error) {}
};




    return (
<div >
        <div ref={productsRef} className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
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
                            onClick={()=> logout()}
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
            {/* sidebarend */}
                <div   className="col-span-9 space-y-4">
                <Link to="" onClick={()=>setOpenmodal(true)} className=" flex gap-2 ml-auto w-44 justify-center px-2 py-2  bg-color10 border border-color10 text-color11 font-medium rounded  hover:bg-transparent hover:text-color10 transition"> Add New product</Link>

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
            </> : <div> Sorry Should be Login {navigate("/login")} </div>
        
    }
</div>
{openModal && 
        <div className="" >
            <div className=" overflow-x-hidden overflow-y-auto outline-none py-32  bg-color6 bg-opacity-40  transition duration-150 fixed  inset-0 z-50 " id="modal">
                <div role="alert" className="container mx-auto   w-11/12 md:w-2/3 max-w-lg">
                    <div className=" py-8 px-5 md:px-10 bg-color11 shadow-md rounded border border-color14">
                        <div className="w-full flex justify-between text-color1 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                            <svg onClick={()=> setOpenmodal(false)}  xmlns="http://www.w3.org/2000/svg"  aria-label="Close" className="icon icon-tabler icon-tabler-x cursor-pointer text-color14" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                
                        </div>
                        <h1 className="text-color3 font-lg font-bold tracking-normal leading-tight mb-4">Enter Product Details</h1>
                        <label  className="text-color3 text-sm font-bold leading-tight tracking-normal">
                            Product Name
                        </label>
                        <input defaultValue={name} onChange={(e)=>{product.name = e.target.value; setProduct({...product})}} className="mb-5 mt-2 text-color5 focus:outline-none focus:border focus:border-color10 font-normal w-full h-10 flex items-center pl-3 text-sm border-color14 rounded border" placeholder="NYX | Suede Matte Lipstick ...." />
                        <label  className="text-color3 text-sm font-bold leading-tight tracking-normal">
                            Product Brand
                        </label>
                        <input defaultValue={brandd} onChange={(e)=>{product.brand = [{name:e.target.value,key:e.target.value}]; product.categories[1] = e.target.value; setProduct({...product})}}
                        type="text" className="mb-5 mt-2 text-color5 focus:outline-none focus:border focus:border-color10 font-normal w-full h-10 flex items-center pl-3 text-sm border-color14 rounded border" placeholder="Brand Name" />

                        <label  className="text-color3 text-sm font-bold leading-tight tracking-normal">
                            Product Category
                        </label>
                        <input defaultValue={category} onChange={(e)=>{product.categories[0] = e.target.value; setProduct({...product})}} className="mb-5 mt-2 text-color5 focus:outline-none focus:border focus:border-color10 font-normal w-full h-10 flex items-center pl-3 text-sm border-color14 rounded border" 
                        placeholder="(eye, face, lip)" />
                        <label className="text-color3 text-sm font-bold leading-tight tracking-normal">
                            Product Price
                        </label>
                        <input defaultValue={price} onChange={(e)=>{product.price = e.target.value; setProduct({...product})}} 
                        className="mb-5 mt-2 text-color5 focus:outline-none focus:border focus:border-color10 font-normal w-full h-10 flex items-center pl-3 text-sm border-color14 rounded border" 
                        placeholder="price" />
                        <label  className="text-color3 text-sm font-bold leading-tight tracking-normal">
                            Product Image URL
                        </label>
                        <input defaultValue={img}
                        onChange={(e)=>{product.image_key = e.target.value; setProduct({...product})}} className="mb-5 mt-2 text-color5 focus:outline-none focus:border focus:border-color10 font-normal w-full h-10 flex items-center pl-3 text-sm border-color14 rounded border"
                        placeholder="https://image.com/...." />

                        <div className="flex items-center justify-start w-full">
                            <button onClick={()=> {addProduct() ; productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
       
    })}} className=" text-color11  border border-color10 focus:outline-none transition duration-150 ease-in-out hover:bg-color11 hover:text-color10 bg-color10 rounded  px-8 py-2 text-sm">Add Product</button>
                            <button onClick={()=> setOpenmodal(false)} className="focus:outline-none ml-3 border border-color12 text-color14 transition duration-150  ease-in-out hover:text-color10  rounded px-8 py-2 text-sm">
                                Cancel
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div >
}

        
        </div>
    )
}

export default ProductsAdmin

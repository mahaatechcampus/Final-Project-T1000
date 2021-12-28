import React from 'react'
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { logoutuser } from '../redux/userRedux';
import {addProduct} from "../redux/cartRedux";
import { removeProduct } from "../redux/wishlistRedux";
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";

function Wishlist() {
    const user = useSelector((state) => state.user.currentUser);
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();



const handleClick = ()=>{
    dispatch(
    logoutuser()
    )
};
const handleAddToCart = (product)=>{
    user && dispatch(
    addProduct({...product, price:product.price})
        ) 
    };

    /////delete product//////
    const deleteProduct = (id)=> {
        console.log(wishlist.products)
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
                    dispatch(removeProduct(id))
            // console.log(wishlist.products.findIndex((item)=> item._id === id))
            //  wishlist.products.splice(wishlist.products.findIndex((item)=> item._id === id),1);
            swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'This product has been deleted.',
                    'success'
                )
                } else if (
                  /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'This product is safe :)',
                    'error'
                )
                }})
        }
        catch (error) {}
    };
    

    return (
        <div> 
            {user? <>
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
                            <h4 className="text-color10 font-medium">{user && user.user.username} </h4>
                        </div>
                    </div>
                    {/* account prof. end */}
                    {/* profile links */}
                    <div className="mt-6 bg-color11 shadow rounded p-4 divide-y divided-gray-200 space-y-4 text-color12">
                        {/* single link  */}
                        <div className="space-y-1 pl-8">
                            
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-color10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            </span>
                                Profile Information
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                                Change Password
                            </Link>
                        </div>

                            {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-color10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            </span>
                            My Order History 
                            </Link>
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            My Reviews
                            </Link>
                        </div>

                            {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link to="" className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-color10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            </span>
                            My Wishlist 
                            </Link>
                        </div>

                             {/* single links  */}
                            <div className="space-y-1  pl-8 pt-4">
                            <Link 
                            to=""
                            onClick={()=> handleClick()}
                            className="relative text-color14  hover:text-color10 block font-medium capitalize transition">
                            <span className="absolute -left-8 top-0 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-color10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            </span>
                            Logout 
                            </Link>
                        </div>
                    </div>
                </div>
            {/* sidebarend */}

            {/* wish list */}
            <div className="col-span-9 space-y-4">
                {/* single wishlist */}
                {wishlist.products && wishlist.products.map((product)=>(

                <div className="flex items-center justify-between gap-6 p-4 border border-color12 rounded">
                   {/* img wish */}
                    <div className="w-28  flex-shrink-0">
                        <img src={product.image_key} className="w-full" alt="wishlist img product"/>
                    </div>
                    {/* wishlist content */}
                    <div className="w-1/3">
                        <h2 className="text-color3 text-md font-medium">{product.name}</h2> 
                        <p className="text-color4 text-sm"> Availability: <span className="text-color1" >In Stock</span> </p>
                    </div>
                    <div className="text-color10 text-md font-semibold">{product.price} SAR</div>
                    <Link to="" onClick={()=> handleAddToCart(product)} className="px-4 py-2 bg-color10 border border-color10 text-color11 font-medium rounded flex items-center gap-2 hover:bg-transparent hover:text-color10 transition"> Add To Cart</Link>
                    <div onClick={() => deleteProduct(product._id)} className="text-color14  cursor-pointer hover:text-color10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    </div>

                </div>
                ))}

            </div>


</div>
</>  :  <div> Sorry Should be Login {navigate("/login")} </div>
        
    }
</div>
)}
export default Wishlist;

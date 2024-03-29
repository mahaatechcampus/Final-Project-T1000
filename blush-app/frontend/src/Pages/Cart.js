import React ,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from 'react-router';
import { cartEmptyifPayed } from '../redux/cartRedux';
import { deleteProduct} from '../redux/cartRedux';
import Swal from "sweetalert2";

function Cart() {
    const KEY = 'pk_test_51K4QRoFYQSGZ6LgGFutNv3mcj4mNmIdz9nRX1v74QY1pY2quazCAe4NcurFP5vqrgb6pL6ztGZI00U2EXRvEGzie00Hs063D2O';
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser);
    const [stripeToken, setStripeToken] = useState(null)
    const [quantityofProduct,setquantityofProduct] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();


console.log(cart)
    const onToken = (token)=>{
        setStripeToken(token);
    };
    useEffect(()=>{

    },[cart.products])

    useEffect(()=>{
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8080/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount: (cart.total*3.75)*100,  
                });
                Swal.fire({
                  title: "Successfull! Your order is being prepared",
                  text: "Redirecting to Homepage",
                  icon: "success",
                  showCancelButton: false,
                  showConfirmButton: false,
                  timer: 2200,
                  timerProgressBar: true,
                  didClose: () => {
                  navigate("/");
                  },
                });
                res.data  && dispatch(cartEmptyifPayed());

                // navigate("/success", {
                // stripeData: res.data,
                // products: cart, });

                } catch (error) {}
        }
        stripeToken && makeRequest();
        
    },[stripeToken,cart.total,navigate])


    const handleQuantity = (type,quantity) => {
      
        if(type === "dec" &&  quantity > 1 ){
          quantity+=1;
             
        }
        else{
          quantity-=1;
        }
    }
 
    useEffect(() =>{
      !user  && dispatch(cartEmptyifPayed());

    },[])
    
    //delete product
    const deleteProductcart = (product)=> {
     
    
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
                    dispatch(deleteProduct(product));
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
        <div className="container mx-auto mt-10">
        
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-color11 px-10 py-10">
              <div className="flex justify-between  border-b border-color12 pb-8">
                <h1 className="font-medium text-color5 text-2xl">Shopping Cart</h1>
                <h2 className="font-medium text-color5 text-2xl">{cart.quantity} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-medium  text-color14 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-medium  text-color14 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-medium  text-color14 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-medium  text-color14 text-xs uppercase w-1/5 text-center">Total</h3>
              </div> 

              {user && cart.products && cart.products.map((product)=>(
              <div className="flex items-center hover:bg-color8 -mx-8 px-6 py-5">
                {/*<!-- product --> */}
                
                <div className="flex w-2/5"> 
                  <div className="w-20">
                    <img className="h-24" src={product.image_key} alt=""/>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-color3 text-sm">{product.name}</span>
                    <span className="text-color1 text-xs">{product.brand[0].name}</span>
                    <Link to="#" onClick={() => deleteProductcart(product)} className="flex mt-1 font-medium hover:text-color10  text-color14 text-xs">  <svg xmlns="http://www.w3.org/2000/svg" className="  h-4 w-4 fill-current mr-2 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>Remove Item </Link>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg onClick={()=> handleQuantity("dec",product.quantity)} className="fill-current text-color14 w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
      
                  <input className="mx-2 text-color3 border  border-color12 text-center w-8" type="text" value={product.quantity}/>
      
                  <svg onClick={()=> handleQuantity("inc",product.quantity)} className="fill-current text-color14 w-3 cursor-pointer" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                </div>
                <span className="text-center text-color3 w-1/5 font-medium text-sm">{product.price} SAR</span>
                <span className="text-center text-color3 w-1/5 font-medium text-sm">{product.price * product.quantity} SAR</span>
              </div>
            ))}

      
            {cart.quantity > 0 ?<Link to="#" onClick={() => dispatch(cartEmptyifPayed())} className="flex font-medium  hover:text-color10  text-color14 text-xs mt-10  "> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current mr-2 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>Remove all from Cart </Link>:<></>}
              <Link to="/" className="flex font-semibold text-color10 text-sm mt-10">
            
                <svg className="fill-current mr-2 text-color10 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Continue Shopping
              </Link>
            </div>
      
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className=" font-medium  text-color5 text-2xl border-b  border-color12 pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-color3 text-sm uppercase">Items {cart.quantity} </span>
                <span className="font-semibold  text-color1 text-sm">{cart.total} SAR</span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-color3 text-sm uppercase">Shipping</span>
                <span className="font-semibold  text-color1 text-sm">   Free </span>
              </div>
              <div className="py-10">
                <label for="promo" className="font-semibold  text-color3 inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
              </div>
              <button className="bg-color1 border border-color1 text-color11  rounded-md hover:bg-transparent hover:text-color1 transition px-5 py-2 text-sm  uppercase">Apply</button>
              <div className="border-t border-color12 mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span className="text-color3">Total cost</span>
                  <span className="text-color10">{cart.total} SAR</span>
                </div>
                <StripeCheckout
                name=" Blush Store"
                image=""
                billingAddress
                shippingAddress
                description={`Your Total is ${cart.total} SAR`}
                amount={((cart.total)/3.75)*100}
                token={onToken}
                stripeKey={KEY}
                >
                <button className="bg-color10 border border-color10  rounded-md font-semibold hover:bg-transparent hover:text-color10 transition py-3 text-sm text-color11 uppercase w-full">Checkout</button>
                </StripeCheckout>
              </div>
            </div>
      
          </div> 
        </div>
      </div>
    )
}

export default Cart;

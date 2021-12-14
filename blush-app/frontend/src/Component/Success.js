import React ,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Success() {
    const {state} = useLocation();
    const {stripeData ,cart} = state;

    // const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
          try {
            const res = await axios.post("http://localhost:8080/api/orders", {
            //   userId: currentUser._id,
                products: cart.products.map((item) => ({
                productId: item._id,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: stripeData.billing_details.address,
            });
            setOrderId(res.data._id);
          } catch {}
        };
        stripeData && createOrder();
      }, [cart, stripeData ]);
    
    return (
        <div>
          {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button >Go to Homepage</button>
  
        </div>
    )
}

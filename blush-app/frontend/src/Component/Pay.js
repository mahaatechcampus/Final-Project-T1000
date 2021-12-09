import React , {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


function Pay() {
    const KEY = 'pk_test_51K4QRoFYQSGZ6LgGFutNv3mcj4mNmIdz9nRX1v74QY1pY2quazCAe4NcurFP5vqrgb6pL6ztGZI00U2EXRvEGzie00Hs063D2O';
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    // const history = useHistory();


    
    const onToken = (token)=>{
        setStripeToken(token);
        console.log(token)
    };
    useEffect(()=>{
        const makeRequest = async () =>{
            try {
            const res = await axios.post("http://localhost:8080/api/checkout/payment",{
                tokenId:stripeToken.id,
                amount: 500
            });
            console.log(res.data);
            navigate("/success")
            // history.push('/success');
            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && makeRequest();

    },[stripeToken, navigate])

    return (
        <div>
            {stripeToken ? (
                <span>Processing, Please Wait ..</span>
            ):(
            <StripeCheckout
            name =" Blush App"
            image = {"/blush-app/frontend/public/Blush logo.png"}
            billingAddress
            shippingAddress
            description ="Your total is 500 SAR"
            amount = {500}
            token={onToken}
            stripeKey = {KEY}
            >
        <Link to="/pay"> <button >Payment</button></Link>
        </StripeCheckout>
        )}
        </div>
    )
}

export default Pay;

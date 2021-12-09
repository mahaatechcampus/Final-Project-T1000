const router = require('express').Router();
const stripe = require('stripe')("sk_test_51K4QRoFYQSGZ6LgGJ2HrhavGSuaHDXbKqXYhsD6JHRFLba6Bs0UH9DC12h2HG1C86eehfG7px0bSoOVHPjF7S1pV00VllNhswo");


router.post("/payment" , (req,res) =>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"SAR",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
        res.status(500).json(stripeErr);
    }else {
        res.status(200).json(stripeRes)
    }
    })
})
module.exports = router;
const router = require('express').Router();
const Cart = require("../models/Cart");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//==== Create Cart ====// << just AS Admin can  create
router.post('/',verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)
    try {
        const saveCart = await newCart.save();
        res.status(200).json(saveCart);
    } catch (error) {
        res.status(500).json(error);    
    }
});

//==== Updating ====// 
router.put("/:id",verifyTokenAndAuthorization, async (req,res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body // everything in a body will set it again
         },{new:true}); // return the new apdate
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
    });

    //==== Deleting ====// 
router.delete("/:id", async (req,res,) =>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
});  

// ==== GET User Cart ====// 
router.get("/find/:userId",verifyTokenAndAuthorization, async (req,res,) =>{ // userId
    try {
        const cart = await Cart.findOne({userId: req.params.userId}); // findOne beacose every user have a one cart
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
});

// //==== GET ALL carts for all user ====// << as Admin access
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)

    }
}) 
module.exports = router;
const router = require('express').Router();
const Order = require("../models/Order");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//==== Create Order ====// 
router.post('/',verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body)
    try {
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder);
    } catch (error) {
        res.status(500).json(error);    
    }
});

//==== Updating ====//  << only admin update order
router.put("/:id",verifyTokenAndAdmin, async (req,res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body // everything in a body will set it again
         },{new:true}); // return the new apdate
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
    });

    //==== Deleting ====// < just admin 
router.delete("/:id",verifyTokenAndAdmin, async (req,res,) =>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
});  

// ==== GET User orders ====// 
router.get("/find/:userId",verifyTokenAndAuthorization, async (req,res,) =>{ // userId
    try {
        const orders = await Order.findOne({userId: req.params.userId}); // findOne beacose every user have a one cart
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
});

// //==== GET ALL orders for all user ====// << as Admin access
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)

    }
}) 
module.exports = router;
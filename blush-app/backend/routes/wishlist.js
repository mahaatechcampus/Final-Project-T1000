const router = require('express').Router();
const Wishlist = require("../models/Wishlist");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//==== Create wishlist ====//
router.post('/',verifyToken, async (req, res)=>{
    const newWishlist = new Wishlist(req.body)
    try {
        const saveWishlist = await Wishlist.save();
        res.status(200).json(saveWishlist);
        } catch (error) {
        res.status(500).json(error);    
    }
});

//==== Updating ====// 
router.put("/:id",verifyTokenAndAuthorization, async (req,res) => {
    try {
        const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id,{
            $set:req.body // everything in a body will set it again
         },{new:true}); // return the new apdate
        res.status(200).json(updatedWishlist);
    } catch (error) {
        res.status(500).json(error);
    }
    });

    //==== Deleting ====// 
router.delete("/:id",verifyTokenAndAuthorization, async (req,res,) =>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.status(200).json("Wishlist has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
});  

// ==== GET User Wishlist ====// 
router.get("/find/:userId",verifyTokenAndAuthorization, async (req,res,) =>{ // userId
    try {
        const wishlist = await Wishlist.findOne({userId: req.params.userId}); // findOne beacose every user have a one wishlist
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(500).json(error)
    }
});

// //==== GET ALL wishlists for all user ====// << as Admin access
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const wishlists = await Wishlist.find();
        res.status(200).json(wishlists)
    } catch (error) {
        res.status(500).json(error)

    }
}) 
module.exports = router;
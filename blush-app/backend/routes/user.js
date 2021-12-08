const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//==== Ubdating ====// << second argument "midlware" to verify WebToken and get Authentecation
router.put("/:id",verifyTokenAndAuthorization, async (req,res) => {
// check if update user password will encrypt agin
if (req.body.password ){
    req.body.password = CryptoJS.AES.encrypt(
        req.body.password, SECRET_KEY)
        .toString();
}
try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set:req.body // everything in a body will set it again
     },{new:true}); // return the new apdate
    res.status(200).json(updatedUser);
} catch (error) {
    res.status(500).json(error);
}
}); 
//==== Deleting ====// 
router.delete("/:id",verifyTokenAndAuthorization, async (req,res,) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
});
//==== GET USER BY ID ====// << just Admin can  get user
router.get("/find/:id",verifyTokenAndAdmin, async (req,res,) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
});
//==== GET ALL USER ====// << just Admin can  get user
router.get("/",verifyTokenAndAdmin, async (req,res,) =>{
    const query = req.query.new //new is a varible  if have any condition on the search  => localhost:8080/api/users?new=true
    try {
        const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router;
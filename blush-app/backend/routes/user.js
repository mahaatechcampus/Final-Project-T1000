const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");

//==== Ubdating ====// 
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
}) //second argument "midlware" to verify WebToken


module.exports = router;
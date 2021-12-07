const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

//==== Register ====//
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password ,"Secret_Key_Blush_APP").toString() 
    });

    try{
    const saveduser = await newUser.save();
    res.status(201).json(saveduser); // 201 = success added

    } catch (error) {
    res.status(500).json(error); // if user not entry data  
 }

});

module.exports = router
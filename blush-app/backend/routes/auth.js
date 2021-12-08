const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "Secret_Key_Blush_APP#";

//==== Register ====//
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password ,SECRET_KEY).toString() 
    });

    try{
    const saveduser = await newUser.save();
    res.status(201).json(saveduser); // 201 = success added

    } catch (error) {
    res.status(500).json(error); // if user not entry data  
}
});

//==== Login ====//
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        //if not have user and wrong
        !user && res.status(401).json("The user does not exist");

        const hashedPassword = CryptoJS.AES.decrypt(user.password , SECRET_KEY);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8);
   // if password is wrong
   password !== req.body.password && res.status(401).json("the password is not correct");

   const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        SECRET_KEY,
        {expiresIn:"3d"} // expires for token 3days
   );
//    const {password, ...others} = user._doc;
    res.status(200).json({user,accessToken}); // if success return the user
    } catch (error) {
    res.status(500).json(error); // if user not entry data  
    }
});


module.exports = router;
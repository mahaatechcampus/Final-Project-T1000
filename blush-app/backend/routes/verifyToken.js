const jwt = require('jsonwebtoken');
const SECRET_KEY = "Secret_Key_Blush_APP#";


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader) {
        const token = authHeader.split(" ")[1]; // to remove "Bearer" from token header
        jwt.verify(token,SECRET_KEY,(err,user)=> {
            if(err) res.status(403).json("Token is not valid"); //403 == the server understands the request but refuses to authorize it
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not Authenticated!");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if (req.user.id == req.params.id || req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to do that!")
        }
    });
};

module.exports ={verifyToken , verifyTokenAndAuthorization};
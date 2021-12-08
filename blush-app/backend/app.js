//==== Requires ==== //
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const app = express();
const port = 8080 ;

//==== Mongoose Connect ====//
mongoose.connect("mongodb+srv://mahadb:maha1312@cluster0.ghbvs.mongodb.net/blushStore?retryWrites=true&w=majority")
.then(()=> console.log("DBConnection Successfull")) // if connect succeeds
.catch((error)=> console.log(error)); // if connect fails

//==== Routes ====//
app.use(express.json({strict: false})); 
app.use("/api/auth", authRoute);// most above routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);



//==== Port listen ====//
app.listen(port,() => {console.log("Backend Server is Running")});


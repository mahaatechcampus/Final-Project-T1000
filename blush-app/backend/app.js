//==== Requires ==== //
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const wishlistRoute = require('./routes/wishlist')
const stripeRoute = require('./routes/stripe');
const cors = require('cors')

const app = express();
const port = 8080 ;

//==== Mongoose Connect ====//
mongoose.connect("mongodb+srv://mahadb:maha1312@cluster0.ghbvs.mongodb.net/blushStore?retryWrites=true&w=majority")
.then(()=> console.log("DBConnection Successfull")) // if connect succeeds
.catch((error)=> console.log(error)); // if connect fails

//==== Routes ====//
app.use(cors());
app.use(express.json({strict: false})); 
app.use("/api/auth", authRoute);// most above routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/wishlist", wishlistRoute);
app.use("/api/checkout",stripeRoute)


//==== Port listen ====//
app.listen(port,() => {console.log("Backend Server is Running")});


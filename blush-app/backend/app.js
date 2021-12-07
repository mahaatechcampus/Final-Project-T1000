//==== Requires ==== //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080 ;

mongoose.connect("mongodb+srv://mahadb:maha1312@cluster0.ghbvs.mongodb.net/blushstore?retryWrites=true&w=majority")


app.listen(port,() => {console.log("Backend Server is Running")});


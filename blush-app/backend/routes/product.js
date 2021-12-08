const router = require('express').Router();
const Product = require("../models/Product");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken");

//==== Create Product ====// << just AS Admin can  create
router.post('/',verifyTokenAndAdmin, async (req, res)=>{
    const newProduct = new Product(req.body)
    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    } catch (error) {
        res.status(500).json(error);    
    }
});

//==== Updating ====// 
router.put("/:id",verifyTokenAndAdmin, async (req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body // everything in a body will set it again
         },{new:true}); // return the new apdate
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
    });
//==== Deleting ====// 
router.delete("/:id",verifyTokenAndAuthorization, async (req,res,) =>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted ...")
    } catch (error) {
        res.status(500).json(error)
    }
});    

// ==== GET Product BY ID ====// 
router.get("/find/:id", async (req,res,) =>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
});

//==== GET ALL Products ====// 
router.get("/", async (req,res,) =>{
    const qNew = req.query.new; //new is a varible  if have any condition on the search  => localhost:8080/api/users?new=true
    const qCategory = req.query.category; //new is a varible  if have any condition on the search  => localhost:8080/api/users?new=true

    try {
        let products; // array
        
        if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(1);
        } else if (qCategory){
        products = await Product.find({
            categories: {
                $in: [qCategory]
            }
        });
        } else { // if don't have categories'
            products = await Product.find();
        }

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        brand: { type: Array, required: true },
        image_key: { type: String, required: true },
        name: { type: String, required: true, unique: true},
        price: { type: Number, default: false },
        desc: { type: String},
        categories: { type: Array, required: true },
        inStock:{type:Boolean, default:true},
        color: { type: String },
        review: { type: String, trim: true },
        rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", ProductSchema);

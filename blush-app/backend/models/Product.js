const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        price: { type: Number, default: false },
        categories: { type: Array, required: true },
        brand: { type: Array, required: true },
        color: { type: String },
        review: { type: String, trim: true },
        rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", ProductSchema);

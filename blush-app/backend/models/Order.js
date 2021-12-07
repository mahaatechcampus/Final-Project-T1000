const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ],
        amount: { type: Number, required: true},
        address: { type: Object, required: true}, // type object to store all address info. from user
        status: { type: String, default: 'Panding'} //panding , onway ,....
});

module.exports = mongoose.model("Order", OrderSchema);

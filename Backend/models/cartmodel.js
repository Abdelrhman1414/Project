const mongoose = require('mongoose');
// const Product = require('./productmodel');
const schema = mongoose.Schema;

const cartSchema = new schema({
    products : [
        {
        product: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },
        count : Number,
        price : Number,
    },
    ],
    cartPrice: Number,
    orderby : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
    

},{timestamps:true});


module.exports = mongoose.model("Cart",cartSchema);
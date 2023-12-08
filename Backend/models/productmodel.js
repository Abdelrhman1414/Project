const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

title : {
    type: String,
    required: true,
    trim: true

},
brand : {
    required: true,
    type: String,
},
description : {
    type: String,
    required: true,
},
price : {
    type: Number,
    required: true,
},
countInst: {
    type: Number,
    required : true
},
images: {
    type: String
},
reviews: {
    type: String,
   // postedby: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
}




}, {timestamps: true});

module.exports = mongoose.model("Product",productSchema);
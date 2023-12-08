const Product = require("../models/productmodel");
const asyncHandler = require("express-async-handler");

///////////////////create a new mobile product///////////////
const createProduct = asyncHandler(async(req,res) => {
try{
const newProduct = await Product.create(req.body);
res.status(200).json(newProduct);
}
catch(error){
    throw new Error(error);
    
}
})

///////////////////get a specific mobile///////////////
const getProduct = asyncHandler(async(req,res) => {
    const { id } = req.params;
    try{
    const findProduct = await Product.findById(id);
    res.status(200).json(findProduct);
    }
    catch(error){
    throw new Error(error);
    }
})


///////////////////get all mobiles///////////////
const getAllProduct = asyncHandler(async(req,res)=>{
    try{
        const getallProducts = await Product.find();
        res.json(getallProducts);
    }
    catch(error){
        throw new Error(error);
    }
} )

///////////////////edit mobile product///////////////
const updateProduct = asyncHandler(async(req,res) =>{
    try{
    const id =req.params.id;
    const newProduct = req.body;
    const product = await Product.findById(id);
    if(product){
        if(newProduct.title){product.title=newProduct.title};
        if(newProduct.brand){product.brand=newProduct.brand};
        if(newProduct.price){product.price=newProduct.price};
        if(newProduct.description){product.description=newProduct.description};
        if(newProduct.countInst){product.countInst=newProduct.countInst};
        if(newProduct.images){product.images=newProduct.images};
        await product.save();
        res.status(200).send("Mobile Updated");
    }
    else{
        res.status(404).send("can not edit");
    }
    }
    catch(error){
        throw new Error(error);
    }
    
});


////////////////////delete mobile product//////////////////////
const deleteProduct = asyncHandler(async(req,res)=>{
const id = req.params.id;
try{
const product = await Product.findByIdAndDelete(id);
if(!product){ return res.status(404).json({message: `cannot find any Mobile with ID ${id}`})}
res.json(product);
res.status(200).send("Mobile deleted");

}
catch(error){
    throw new Error(error);
}
});


module.exports = { createProduct, getProduct, getAllProduct,updateProduct,deleteProduct  };
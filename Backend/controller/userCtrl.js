const { generateToken } = require('../config/jwtToken');
const User=require('../models/userModel');
const Product = require("../models/productmodel")
const Order = require("../models/orderModel");
const Cart = require("../models/cartmodel");

const asyncHandler=require('express-async-handler')


const createUser= asyncHandler (async(req,res)=>{
  const email=req.body.email;
  
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  else{
  
  
  const findUser=await User.findOne({email:email});
  if (!findUser) {
  
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
  
      throw new Error("User Already Exists");
    }
  }
  
  }); 
  
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }



const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
      res.json({
        _id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  });

  const getallUser = asyncHandler(async (req, res) => {
    
    try {
      const getUsers = await User.find();
      res.json(getUsers);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
  
    try {
      const getaUser = await User.findById(id);
      res.json({
        getaUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });



  const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

  
    try {
      const deleteaUser = await User.findByIdAndDelete(id);
      res.json({
        deleteaUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });


  const updatedUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
 
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          firstname: req?.body?.firstname,
          lastname: req?.body?.lastname,
          email: req?.body?.email,
          mobile: req?.body?.mobile,
        },
        {
          new: true,
        }
      );
      res.json(updatedUser);
    } catch (error) {
      throw new Error(error);
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }


  const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { id } = req.user;
    try {
      let products = [];
      const user = await User.findById(id);
      // check if user already have product in cart
      const alreadyExistCart = await Cart.findOne({ orderby: user.id });
      if (alreadyExistCart) {
        alreadyExistCart.remove();
      }
      for (let i = 0; i < cart.length; i++) {
        let object = {};
        object.product = cart[i].id;
        object.countInst = cart[i].countInst;
       
        let getPrice = await Product.findById(cart[i].id).select("price").exec();
        object.price = getPrice.price;
        products.push(object);
      }
      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
      }
      let newCart = await new Cart({
        products,
        cartTotal,
        orderby: user?.id,
      }).save();
      res.json(newCart);



    
    /*
  

    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "egp",
      },
      orderby: user.id,
      orderStatus: "Cash on Delivery",
    }).save();

    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { id: item.product.id},
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });

    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  }
  */
    }
    catch(error){
      throw new Error(error);
    }
  
  })

  const getUserCart= asyncHandler(async(req, res)=>{
const {id}=req.user;
try{
const cart=await Cart.findOne({orderby:id})

res.json(cart);
}
catch(error){
  throw new Error(error);
}

  }

  );

  const emptyCart = asyncHandler(async (req, res) => {
    const { id } = req.user;
  
    try {
      const user = await User.findById(id);
      const cart = await Cart.findOneAndRemove({ orderby: user.id });
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
  });




  

module.exports={createUser,loginUserCtrl,getallUser,getaUser,deleteaUser,updatedUser,userCart,getUserCart,emptyCart};

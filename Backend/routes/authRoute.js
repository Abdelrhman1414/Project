const express =require('express');
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedUser,userCart,getOrders,createOrder, getUserCart,emptyCart } = require('../controller/userCtrl');
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware');
const router=express.Router();


router.post('/register',createUser);
router.post('/login',loginUserCtrl);
router.post('/order',authMiddleware,createOrder);
router.get('/allusers',authMiddleware,isAdmin,getallUser);
router.get('/cart', authMiddleware, getUserCart);
router.get('/order',authMiddleware,getOrders);

router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/empty-cart',authMiddleware,emptyCart);
router.delete('/:id',authMiddleware,isAdmin,deleteaUser);
router.put('/edituser',authMiddleware,updatedUser);
router.post('/cart', authMiddleware, userCart);
module.exports=router;
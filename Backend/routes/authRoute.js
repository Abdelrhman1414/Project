const express =require('express');
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedUser,createOrder, userCart,getOrders } = require('../controller/userCtrl');
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware');
const router=express.Router();

router.post('/register',createUser);
router.post('/login',loginUserCtrl);
router.post('/order',authMiddleware,createOrder);
router.get('/allusers',authMiddleware,isAdmin,getallUser);
router.get('/:id',authMiddleware,isAdmin,getaUser);
router.get('/order',authMiddleware,getOrders);
router.delete('/:id',authMiddleware,isAdmin,deleteaUser);
router.put('/edituser',authMiddleware,updatedUser);

module.exports=router;
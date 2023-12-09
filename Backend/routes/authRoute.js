const express =require('express');
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedUser,userCart, getUserCart,emptyCart } = require('../controller/userCtrl');
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware');
const router=express.Router();


router.post('/register',createUser);
router.post('/login',loginUserCtrl);

router.get('/allusers',authMiddleware,isAdmin,getallUser);
router.delete('/empty-cart',authMiddleware,emptyCart);
router.delete('/:id',authMiddleware,isAdmin,deleteaUser);
router.put('/edituser',authMiddleware,updatedUser);

router.get("/cart",authMiddleware,getUserCart);

router.post("/cart", authMiddleware,userCart);
router.get('/:id',authMiddleware,isAdmin,getaUser);

module.exports=router;
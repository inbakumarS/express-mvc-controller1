
const express=require('express');

const adminController=require('../controller/addadmin');
const router=express.Router();

//will call /admin/add-product get method
router.get('/add-product',adminController.admingetController);
//will call /admin/admin-product post method
router.post('/add-product',adminController.adminpostController);
module.exports=router;

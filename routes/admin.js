const path=require('path');

const express=require('express');

const rootDir=require('../util/path')

const router=express.Router();

//will call /admin/add-product get method
router.get('/add-product',(req , res , next)=>{
    console.log('in the middleware!');

    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
//will call /admin/admin-product post method
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;

const express=require('express');

const router=express.Router();

//will call /admin/add-product get method
router.get('/add-product',(req , res , next)=>{
    console.log('in the middleware!');

    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>');
});
//will call /admin/admin-product post method
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;

const path=require('path');

const express=require('express');

//const rootDir=require('../util/path')
const contactController=require('../controller/contactus');
const router=express.Router();

router.get('/contact-us',contactController.contactgetController);

router.post('/contact-us',contactController.contactpostController);


module.exports=router;
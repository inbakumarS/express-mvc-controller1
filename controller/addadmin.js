const path=require('path');
const rootDir=require('../util/path');

exports.admingetController=(req , res , next)=>{
    console.log('in the middleware!');

    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.adminpostController=(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
}
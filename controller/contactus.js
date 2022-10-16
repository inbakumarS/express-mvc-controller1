const path=require('path');
const rootDir=require('../util/path');

 exports.contactgetController= (req , res , next)=>{
    console.log('in the middleware!');

    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.contactpostController=(req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'));
    
}
const path=require('path');
const rootDir=require('../util/path');

exports.controllergetShop=(req, res, next )=>{
    console.log('in the another middleware!'); 
    res.sendFile(path.join(rootDir,'views','shop.html'));
}
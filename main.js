const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');
const errorController = require('./controller/error');
const apps=express();

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop');

const contactRoutes=require('./routes/contact');


apps.use(bodyParser.urlencoded({extended:false}));
apps.use(express.static(path.join(__dirname, 'public')));

apps.use('/admin',adminRoutes);
apps.use(shopRoutes);
apps.use('/admin',contactRoutes);

/*apps.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});*/

apps.use(errorController.getError);
apps.listen(3004);
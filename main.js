const express=require('express');
const bodyParser=require('body-parser');

const apps=express();

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop')


apps.use(bodyParser.urlencoded({extended:false}));


apps.use('/admin',adminRoutes);
apps.use(shopRoutes);

apps.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>');
});
apps.listen(3004);
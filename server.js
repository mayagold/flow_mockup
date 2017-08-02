// server

// require node modules and product schema
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/products.js');
// const productData = require('./data.js');

// app.use
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// router
const productsController = require('./controllers/products.js');
app.use('/products', productsController);

// connect to mongo
mongoose.connect('mongodb://localhost:27017/basiccrud');
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//listening in node
app.listen(3000, ()=>{
  console.log('listening');
})

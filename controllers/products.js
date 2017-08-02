// all the single modules
const express = require('express');
const router = express.Router();
const Product = require('../models/products.js');

// get route for index page
router.get('/', (req,res)=>{
  Product.find( {}, (error, allProducts)=>{
    res.render('index.ejs', {
      product: allProducts
    });
  });
});

// get route for new page
router.get('/new', (req,res)=>{
  res.render('new.ejs');
});

//post route for new data entered
router.post('/', (req,res)=>{
  Product.create(req.body,
  (error, createdProduct)=>{
    res.redirect('/products');
  });
});

//show route
router.get('/:id', (req,res)=>{
  Product.findById(req.params.id, (err, foundProduct)=>{
    res.render('show.ejs', {
      product: foundProduct,
      id: [req.params.id]
    });
  });
});

//get route for edit page
router.get('/:id/edit', (req,res)=>{
  Product.findById(req.params.id, (err, foundProduct)=>{
    res.render(
      'edit.ejs',
      {
        product: foundProduct,
        id: [req.params.id]
    });
  });
});

//put route for editing data
router.put('/:id', (req,res)=>{
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel)=>{
    res.redirect('/products');
  });
});

//purchase
router.patch('/:id', (req, res)=>{
    Product.update({_id: req.params.id}, {$inc: {qty: -1}},
      (err, updateCount)=>{
        res.redirect('/products/');
    });
});

//delete route
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err,data)=>{
      res.redirect('/products');
    });
});

module.exports = router;

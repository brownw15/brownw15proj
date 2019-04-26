const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');
const Product = require('../models/Product');

router.get('/', (req,res)=>{
  Product.findAll()
    .then((products)=>{
      //console.log(products);
      res.render('index', {products: products});
    })
    .catch((err)=>{console.log('error outputting products, err');});
  });

router.get('/:id', (req, res)=>{
  let id = req.params.id;
  Product.findByPk(id)
  .then((product)=> {
    console.log(product);
    res.render('productview', {product: product});
  })
  .catch((err)=>{console.log('error outputting products, err');});
});
module.exports = router;

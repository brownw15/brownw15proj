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
module.exports = router;

const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');
const Product = require('../models/Product');

router.get('/', (req,res)=>{
  Product.findAll()
    .then((products)=>{
      //console.log(products);
      res.render('admin/products/adminindex', {products: products});
    })
    .catch((err)=>{console.log('error outputting products, err');});
  });

router.get('/new', (req,res)=>{
  res.render('admin/products/new');
});

router.post('/new', (req,res)=>{
  Product.create({
    itemid: req.body.id,
    itemName: req.body.itemName,
    itemDesc: req.body.itemDesc,
    itemImg: req.body.itemImg,
    itemPrc: req.body.itemPrc
  })
  .then(()=>{
    res.redirect('/admin/products');
  })
  .catch((err)=>{
    console.log('Error saving product', err)
  });
});

router.get('/:id', (req, res)=>{
  let id = req.params.id;
  Product.findByPk(id)
  .then((product)=> {
    console.log(product);
    res.render('admin/products/productview.pug', {product: product});
  })
});

router.get('/edit/:id', (req,res)=>{
  const id = req.params.id;
  Product.findByPk(id)
  .then((product)=>{
    res.render('admin/products/edit.pug', {product: product});
  })
});

router.post('/delete', (req,res)=>{
  const id = req.body.id;
  Product.findByPk(id)
  .then((product)=>{
    product.destroy()
    .then(()=>{
      res.redirect('/admin/products');
    });
  })
});

router.post('/edit/:id', (req,res)=>{
  const id = req.params.id;
  Product.findByPk(id)
  .then((product)=>{
    product.itemName = req.body.itemName;
    product.itemDesc = req.body.itemDesc;
    product.itemImg = req.body.itemImg;
    product.itemPrc = req.body.itemPrc;
    product.save().then(()=>{
      res.redirect('/admin/products');
      console.log(product.itemImg);
    });
  })

});

module.exports = router;

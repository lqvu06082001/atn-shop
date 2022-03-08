const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

const { multipleMongooseToObject } = require('../ulti/mongoose')
const { mongooseToObject } = require('../ulti/mongoose')

router.post('/deleteproduct', function(req,res,next){
    Product.remove({_id: { $in: req.body.productIds}})
        .then(() => res.redirect('back'))
        .catch(next);
})

router.use('/create', function (req,res,next){
    res.render('product/create');
})

router.use('/manage', function(req,res,next){
    Product.find({})
    .then((product) => 
            res.render('product/manage', {
                product: multipleMongooseToObject(product),
                })
            )
            .catch(next)
})

router.get('/:id/edit', function (req,res,next) {
    Product.findById(req.params.id)
        .then(product => res.render('product/edit', {
            product: mongooseToObject(product)
        }))
        .catch(next);
})

router.put('/:id', function (req,res,next) {
    Product.updateOne({_id: req.params.id}, req.body)
        .then(product => res.redirect('/product'))
        .catch(next);
})

router.delete('/:id/delete', function(req,res,next) {
    Product.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    
})

router.post('/store', function (req,res,next) {
    const product = new Product(req.body);
    product.save()
        .then(() => res.redirect('/product'))
        .catch(error => {
            
        })
})

router.use('/:slug', function(req,res,next){
    Product.findOne({ slug: req.params.slug})
    .then (product => {
        res.render('product/show', { 
            product: mongooseToObject(product) 
        });
    })
    .catch(next)
})

router.use('/', function (req, res, next){
    Product.find({})
    .then(product => {
        res.render('product', {
            product: multipleMongooseToObject(product)
        })
    })
    .catch(err=>next(err))
})


module.exports = router;
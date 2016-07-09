var express = require('express');
var router = express.Router();
var Product = require('../model/product.js');

router.get('/api/products', function(req, res, next) {
    Product.find()
        .exec(function(err, result) {
            if (err) { return next(err) }
            res.json(result);
        })
});


router.get('/api/products/:productId', function (req, res, next) {
    Product.findById(req.params.productId)
        .exec(function(err, result) {
            if (err) { return next(err) }
            res.json(result);
        })
});


router.post('/api/products', function(req, res, next) {

    var product = new Product({
        name: req.body.name,
        code: req.body.code,
        available: req.body.available,
        tags: req.body.tags
    });

    product.save(function(err, result) {
        if (err) { return next(err) }
        res.status(201).json(result);
    })
});


router.put('/api/products/:productId', function (req, res, next) {
    Product.findById(req.params.productId)
        .exec(function(err, product) {

            product.name = req.body.name;
            product.code = req.body.code;
            product.available = req.body.available;
            product.tags = req.body.tags;

            product.save(function (err, result) {
                if (err) {
                    return next(err)
                }
                res.status(201).json(result);
            });
        });
});


router.delete('/api/products/:productId', function (req, res, next) {
    Product.findByIdAndRemove(req.params.productId)
        .exec(function(err, result) {
            if (err) { return next(err) }
            res.json(result);
        })
});


module.exports = router;

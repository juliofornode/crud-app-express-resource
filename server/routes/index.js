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
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        date: req.body.date
    });

    product.save(function(err, result) {
        if (err) { return next(err) }
        res.status(201).json(result);
    })
});


router.put('/api/products/:productId', function (req, res, next) {
    Product.findById(req.params.productId)
        .exec(function(err, product) {
            product.imageUrl = req.body.imageUrl;
            product.title = req.body.title;
            product.author = req.body.author;
            product.description = req.body.description;
            product.price = req.body.price;
            product.date = req.body.date;

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

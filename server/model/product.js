var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    author: String,
    description: String,
    price: Number,
    date: Date
});

module.exports = mongoose.model('Product', productSchema);

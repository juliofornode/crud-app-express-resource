var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    imageUrl: String,
    name: String,
    code: String,
    available: Date,
    price: Number,
    tags: Array
});

module.exports = mongoose.model('Product', productSchema);

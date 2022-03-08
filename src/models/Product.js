const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema({
    ProductName: {type: String, minLength: 1, maxLength: 255},
    Information: {type: String, maxLength: 600},
    ProductCode: {type: String, maxLength: 255},
    Price: {type: Number, default: 10000},
    Unit: {type: Number, default: 1},
    ImgLink: {type: String, maxLength: 255},
    slug: {type : String, slug : 'ProductName', unique: true},
    deletedAt: {},
}, {
    timestamps : true,
});
Product.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});
mongoose.plugin(slug);

module.exports = mongoose.model('Product', Product);

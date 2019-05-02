'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.getById = async(id) => {
    const res = await Product.findOne({
        _id: id,
    }, 'title price slug');
    return res;
}

exports.getByTags = async(tag) => {
    const res = await Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')

}

exports.create = (data) => {
    var product = new Product(data);
    return product.save()    
}

exports.update = (id , data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price
            }
        })
}

exports.delete = (id) => {
    return Product
        .findByIdAndRemove(id);
}
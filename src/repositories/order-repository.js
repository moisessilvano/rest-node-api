'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
    const res = await Order
        .find({}, 'number status customer items')
        .populate('customer')
        .populate('items.product', 'title');
    return res;
}


exports.create = (data) => {
    var order = new Order(data);
    return order.save()    
}

const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    seller_id : String,
    name : String,
    product_ids: [{
        type:String
    }]
})

const sellerModel = mongoose.model('seller', sellerSchema, 'seller');
module.exports = sellerModel;
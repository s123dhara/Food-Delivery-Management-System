const mongoose = require('mongoose');

const deliveryPartnerModel = new mongoose.Schema({
    
    fullname : {type : String},
    email : {type : String},
    password : {type : String},

    deliveryStatus : {type : String, default : "Off"},

    currentOrderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'order'
    },
    currentOrderNo : { type : Number, default : -1}
    
});

module.exports = mongoose.model("deliveryPartner", deliveryPartnerModel);

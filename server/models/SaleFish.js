const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const saleFishSchema = new Schema({
    fishName: {
        type: String,
        required: true,
        trim: true,
    },
    // image: {
    //     type: 
    // },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

const SaleFish = model('SaleFish', saleFishSchema);

module.exports = SaleFish;
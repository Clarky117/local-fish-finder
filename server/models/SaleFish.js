const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const saleFishSchema = new Schema({
    // aligns username to fish sale
    fishname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
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
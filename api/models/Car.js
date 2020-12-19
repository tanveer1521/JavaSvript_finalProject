const mongoose = require('mongoose');

// Our schema
const CarSchema = new mongoose.Schema({
    car: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    warranty: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);
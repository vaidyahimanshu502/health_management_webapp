const mongoose = require('mongoose');

const sunitaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
     },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    activity: [{
        type: String,
        required: true
    }],
    nutrition :[{
        type: String,
        required: true
    }],
    vitals: [{
        type: String, 
        required: true
    }]
 },
 {timestamps: true}
)

const User = mongoose.model('details', sunitaSchema);
module.exports = User;
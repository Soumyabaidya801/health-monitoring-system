// models/HealthRecord.js

const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    heartRate: Number,
    oxygenLevel: Number,
    bloodPressure: String,
    sugarLevel: Number,
    temperature: Number

}, {
    timestamps: true
});

module.exports = mongoose.model("HealthRecord", healthRecordSchema);


/*const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    date:{
        type:Date,
        default:Date.now
    },
    content: String,
    likes:[
        {type:mongoose.Schema.Types.ObjectId,ref:'User'}
    ]
});

module.exports = mongoose.model('post', postSchema);*/
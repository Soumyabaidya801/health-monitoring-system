const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    age:Number,
    email: String,
    password: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}]
});

module.exports = mongoose.model('User', userSchema);*/
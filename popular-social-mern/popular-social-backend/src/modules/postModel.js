const mongoose = require('mongoose');

const postModel = mongoose.Schema({
    user: {type: String, required: true},
    imgName: {type: String, required: true},
    text: {type: String, required: true},
    avatar: {type: String, required: true},
    timestamp: {type: String, required: true},
})

module.exports = mongoose.model('posts', postModel);
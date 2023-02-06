const mongoose =  require("mongoose");

const postsModel = mongoose.Schema({
    caption: {type: String, required: true},
    user: {type: String, required: true},
    image: {type: String, require: true},
})

module.exports = mongoose.model('posts', postsModel);
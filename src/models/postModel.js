const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    post_image: {
        type: String,
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
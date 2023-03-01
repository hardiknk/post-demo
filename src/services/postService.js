const { fileUpload } = require("../helpers/common");
const Post = require("../models/postModel");
const path = require("path");
const fs = require("fs");

class postService {

    async getAllPost(req, res) {
        try {
            // const postData = await Post.find(); // select all the records
            const postData = await Post.find({}, { _id: 0, title: 1, _id: 1, description: 1, post_image: 1 }); //select the particular columns 
            res.status(400).jsonp({
                data: postData,
                message: "Posts records fetched successfully.",
            });
        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }

    async getPost(req, res) {
        try {
            const _id = req.params.id;
            // res.send("hii hardik kanzariya");
            const postData = await Post.find({ _id: _id }, { _id: 0, title: 1, description: 1, post_image: 1 });
            res.status(400).jsonp({
                data: postData,
                message: "Posts records fetched successfully.",
            });
        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }

    async addPost(req, res) {
        try {
            const { title, description } = req.body;
            let fileName = "";

            if (req.file) {
                fileName = req.file.filename;
            }

            const postData = await Post.create({
                title: title,
                description: description,
                post_image: fileName,
            });

            res.status(400).jsonp({
                data: postData,
                message: "Post is added successfully.",
            });

        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }

    async deletePost(req, res) {
        try {
            const id = req.params.id;
            const isPost = await Post.findByIdAndDelete(id);
            if (isPost) {
                res.status(200).json({ data: null, message: "Post is deleted successfully." });
            }
            else {
                res.status(400).json({ data: null, message: "Something is wrong or post is not found." });
            }

        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }

    async updatePost(req, res) {
        try {
            const { title, description } = req.body;
            const _id = req.params.id;
            // findByIdAndUpdate
            const postData = await Post.findById({ _id });

            let fileName = "";
            if (req.file) {
                fileName = req.file.filename;
                if (fileName) {
                    const dirPath = path.join(__dirname, "../images/");
                    if (postData.post_image) {
                        if (fs.existsSync(dirPath + postData.post_image)) {
                            fs.unlink(dirPath + postData.post_image, (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                        }
                    }
                }
            }
            else {
                fileName = postData.post_image;
            }

            postData.title = title;
            postData.description = description;
            postData.post_image = fileName;

            const updateData = await postData.save();

            res.status(200).jsonp({
                data: updateData,
                message: "Post data was successfully updated.",
            });

        } catch (error) {
            res.status(400).jsonp({
                data: null,
                message: error
            });
        }
    }
}

module.exports = new postService();
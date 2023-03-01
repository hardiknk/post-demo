const express = require('express');
const router = new express.Router();
const post = require('../models/postModel');
const postService = require('../services/postService');
const { fileUpload } = require('../helpers/common');
const postValidator = require("../validation/postvalidator");
const validate = require("../middleware/index");

router.get('/get-all-post', postService.getAllPost);
router.post("/add-post", fileUpload.single("post_image"), postValidator.creatPost, validate, postService.addPost);
router.post("/delete-post", postValidator.deletePost, validate, postService.deletePost);
router.post("/update-post/:id",fileUpload.single("post_image"),postValidator.updatePost, validate, postService.updatePost);
module.exports = router;
const express = require('express');
const router = new express.Router();
const post = require('../models/postModel');
const postService = require('../services/postService');
const { fileUpload } = require('../helpers/common');
const postValidator = require("../validation/postvalidator");
const validate = require("../middleware/index");

router.get("/posts", postService.getAllPost);
router.get("/posts/:id", postService.getPost);
router.post("/posts", fileUpload.single("post_image"), postValidator.creatPost, validate, postService.addPost);
router.delete("/posts/:id", postService.deletePost);
router.patch("/posts/:id", fileUpload.single("post_image"), postValidator.updatePost, validate, postService.updatePost);
module.exports = router;
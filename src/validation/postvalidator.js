const { body } = require('express-validator')


const creatPost = [
    body('title').notEmpty().withMessage('Title filed is required.'),
    body('description').notEmpty().withMessage('Description filed is required.'),
];

const deletePost = [
    body('id').not().isEmpty().withMessage('Id filed is required.'),
];

const updatePost = [
    body('title').not().isEmpty().withMessage('Title filed is required.'),
    body('description').not().isEmpty().withMessage('Description filed is required.'),
];

module.exports = { creatPost, deletePost, updatePost };
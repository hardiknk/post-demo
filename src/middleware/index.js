const { validationResult } = require('express-validator');

const validate = function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(422)
            .jsonp({ status: 422, errors: errors.array() });
    }
    next();
}

module.exports = validate;
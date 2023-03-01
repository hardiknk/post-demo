const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pathF = path.join(__dirname, "../images");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(pathF)) {
            fs.mkdirSync(pathF);
          }
        cb(null, 'images/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const fileUpload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});


module.exports = {fileUpload};

let express = require('express'),
multer = require('multer'),
mongoose = require('mongoose'),
router = express.Router();
const storage = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null,'uploads/image');
},
filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName)
}
});
var upload = multer({
storage: storage,
fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/svg+xml") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
});
module.exports = upload

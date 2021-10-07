const multer = require("multer")
const path = require("path")
//Multer Storage && Filter Configuration
exports.multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'public/images'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.split('.')[0] + '-' + new Date().getTime() + '.' + file.mimetype.split('/')[1])
    }
})
exports.multerFilter = (req, file, cb) => {
    const fileExtension = file.mimetype.split('/')[1]
    if (fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png" || fileExtension === "png") {
        cb(null, true)
    } else {
        cb(new Error(`${fileExtension} extension is not allowed!!`), false)
    }
}
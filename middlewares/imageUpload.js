const multer = require('multer');

// Storage configuration for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
    }
});

const upload = multer({ storage: storage });

// Upload endpoint handler
const uploadImage = (req, res) => {
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({
        message: 'File uploaded successfully',
        filename: req.file.filename,
        url: fileUrl
    });
};

module.exports = { uploadSingle: upload.single('image'), uploadImage };

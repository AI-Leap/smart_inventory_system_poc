const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
  region: 'ap-southeast-1',
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/svg+xml'
  ) {
    return cb(null, true);
  } else {
    return cb(
      new Error(
        'Invalid image file type, only JPEG/JPG, PNG and SVG files are allowed',
      ),
    );
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: process.env.BUCKET,
    key: (req, file, cb) => {
      const fileName = file.originalname.replace(' ', '-');
      const imageUrl = `https://${process.env.BUCKET}.s3-ap-southeast-1.amazonaws.com/${fileName}`;
      req.body.imageUrl = imageUrl;
      return cb(null, fileName);
    },
  }),
});

module.exports = upload;

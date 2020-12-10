const express = require('express');
const router = express.Router();
const connection = require('../database/connection');
const sharp = require('sharp');
const aws = require('aws-sdk');
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require('fs');

aws.config.update({
  accessKeyId: "AKIAQUZLG3NFZE4J3IVE",
  secretAccessKey: "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",
});
const s3 = new aws.S3();
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: "awba-other-images",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

const singleUpload = upload.single("image");

const uploadOtherImage = async function (req, res) {

  try {
    singleUpload(req, res, function (err) {
      if (err) {
        return res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }
      res.status(200).json({ success: true, user: user })
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

const uploadImage = async function (req, res) {
  const {
    fileName,
    path,
  } = req.body;
  const now = Date.now();
  const s3 = new aws.s3();
  try {
    const buffer = await sharp(path)
      .embed()
      .toBuffer();
    
    const s3res = await s3.upload({
      Bucket: "awba-other-images",
      Key: `${fileName}`,
      Body: buffer,
      ACL: "public-read",
    }).promise();
    return res.status(200).send(s3res.location);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  uploadOtherImage,
};
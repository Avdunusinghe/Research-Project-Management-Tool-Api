let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  uuidv4 = require("uuid"),
  router = express.Router();

const DIR = "../documents";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "document/pdf" ||
      file.mimetype == "document/docx" ||
      file.mimetype == "document/pptx" ||
      file.mimetype == "document/xlsx"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .pdf, .docx, .pptx and .xlsx format allowed!"));
    }
  },
});

// documentUpload model
let DocumentUpload = require("../models/documentUpload.model");

const uploadDocument = async (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const documentupload = new DocumentUpload({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    document: url + "../documents" + req.file.filename,
  });
  documentUpload
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Document Upload successfully!",
        userCreated: {
          _id: result._id,
          document: result.document,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
};

const retrieveUploadedDocument = async (req, res, next) => {
  DocumentUpload.find().then((data) => {
    res.status(200).json({
      message: "Document  retrieved successfully!",
      documents: data,
    });
  });
};

module.exports = {
  uploadDocument,
  retrieveUploadedDocument,
};

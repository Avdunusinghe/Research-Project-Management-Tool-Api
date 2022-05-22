const blobServiceClient = require("../utils/azure.blob.setting");
const express = require("express");
const getStream = require("into-stream");
const { _logFunc } = require("nodemailer/lib/shared");

const uploadPresentation = async (req, response, next) => {
  const file = (Array.isArray(req.files) ? req.files : [req.files]).filter(
    (e) => e
  );

  console.log(file.length);

  console.log(req.files.data);
  const containerName = "test";

  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobName = "newblob" + new Date().getTime();
  const stream = getStream(req.files);
  console.log(stream);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient
    .uploadStream(stream, file.length)
    .then(() => {
      res.render("success", {
        message: "File uploaded to Azure Blob storage.",
      });
    })
    .catch((err) => {
      if (err) {
        handleError(err);
        return;
      }
    });
};

module.exports = {
  uploadPresentation,
};

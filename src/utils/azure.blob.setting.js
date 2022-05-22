const { BlobServiceClient } = require("@azure/storage-blob");

const azureBlobConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(azureBlobConnectionString);

module.exports = blobServiceClient;

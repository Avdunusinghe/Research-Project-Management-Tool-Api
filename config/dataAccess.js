const mongoose = require("mongoose");
const dbDebugger = require("debug")("app:db");

const conectDatabase = async (connectionString) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    dbDebugger("Conected MongoDb.....");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectDatabase;

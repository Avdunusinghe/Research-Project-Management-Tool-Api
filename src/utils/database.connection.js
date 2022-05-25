const mongoose = require("mongoose");
const dbDebugger = require("debug")("app:db");

let mongoDb;

const databaseConnection = async () => {
	try {
		const connectionString = process.env.connectionString;
		mongoDb = await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		dbDebugger("Conected MongoDb.....");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	return mongoDb;
};

module.exports = databaseConnection;

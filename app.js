//load modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
var filtUpload = require("express-fileupload");
const startupDebugger = require("debug")("app:startup");
const databaseConnection = require("./src/utils/database.connection");
const logger = require("./logger");

//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

app.use(helmet());
app.use(filtUpload());

//Middleware

if (app.get("env") === "development") {
	app.use(morgan("tiny"));
	startupDebugger("Enabled Morgon......");
}

//Connect Database
app.use(logger);

app.use((request, response, next) => {
	console.log("Authenticating...");
	next();
});

//routes
app.get("/", (request, response) => {
	response.send("<h3>Welcome Research Project Management Tool API</h3>");
});

app.use("/api/auth", require("./src/routes/auth.route"));
app.use("/api/user", require("./src/routes/user.route"));
app.use("/api/student", require("./src/routes/student.route"));
app.use("/api/studentGroup", require("./src/routes/studentGroup.route"));
app.use("/api/topic", require("./src/routes/topic.route"));
app.use("/api/requests", require("./src/routes/requests.route"));
app.use("/api/submission", require("./src/routes/submisstion.route"));
app.use("/api/studentsubmission", require("./src/routes/studentsubmission.route"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
	databaseConnection();
	console.log(`Research Management Project Tool Web API: ${port}`);
});

/*Production URL=>https://rpmt-backend-api.herokuapp.com/*/

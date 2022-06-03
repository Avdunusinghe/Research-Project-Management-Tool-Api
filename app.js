//load modules
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const logger = require("./logger");
const mongoose = require("mongoose");
//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());

app.use(helmet());

const connectionString = process.env.connectionstring;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {});

if (app.get("env") === "development") {
	app.use(morgan("tiny"));
	startupDebugger("Enabled Morgon......");
}

//Connect Database
app.use(logger);

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
app.use("/api/submisstion", require("./src/routes/submisstion.route"));
app.use("/api/evaluation", require("./src/routes/evaluation.route"));
app.use("/api/submission", require("./src/routes/submisstion.route"));
app.use("/api/studentsubmission", require("./src/routes/studentsubmission.route"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Research Management Project Tool Web API Prod: ${port}`);
});

//Production URL=>https://rpmt-backend-api.herokuapp.com/

//load modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const dataAccess = require("./src/config/dataAccess");
const logger = require("./logger");

require("dotenv").config();

//Create the Express App
const app = express();

//Setup Request body JSON Parsing
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Enable All CORS Requests
app.use(cors());
app.use(helmet());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Enabled Morgon......");
}

//Connect Database
const connectionString = process.env.connectionString;
dataAccess(connectionString);
app.use(logger);

app.use((request, response, next) => {
  console.log("Authenticating...");
  next();
});

//routes
app.use("/api/auth", require("./src/routes/auth.route"));
app.use("/api/user", require("./src/routes/user.route"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Research Management Project Tool Web API: ${port}`);
});

const express = require("express");
const router = express.Router();
//const authenticateUser = require("../middleware/auth");
const { saveUser } = require("../controllers/user.controller");

//@route POST api/user/
//@description Save User
router.post("/", saveUser);

module.exports = router;

const express = require("express");
const router = express.Router();

const { saveUser } = require("../controllers/UserController");

//@route POST api/user/
//@description Save User
router.post("/", saveUser);

module.exports = router;

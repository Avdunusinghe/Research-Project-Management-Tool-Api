const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth.controller");

//@route POST api/auth/
//@description Save User
router.post("/", login);

module.exports = router;

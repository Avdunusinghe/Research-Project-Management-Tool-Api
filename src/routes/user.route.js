const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { saveUser } = require("../controllers/user.controller");

//@route POST api/user/
//@description Save User
router.post("/", auth, saveUser);

module.exports = router;

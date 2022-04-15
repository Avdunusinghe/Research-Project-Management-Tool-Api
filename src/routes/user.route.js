const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  saveUser,
  getAllUsersDetails,
} = require("../controllers/user.controller");

//@route POST api/user/
//@description Save User
router.post("/", auth, saveUser);

router.get("/getAllUsersDetails", getAllUsersDetails);

module.exports = router;

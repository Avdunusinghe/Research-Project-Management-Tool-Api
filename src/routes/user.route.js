const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  saveUser,
  getAllUsersDetails,
  deleteUser,
  getUserById,
} = require("../controllers/user.controller");

//@route POST api/user/
//@description Save User
router.post("/", auth, saveUser);

//@route GET api/user/getAllUsersDetails
//@desc Get All Users
router.get("/getAllUsersDetails", getAllUsersDetails);

//@route Delete api/user/id
//@desc Delete User
router.delete("/:id", deleteUser);

//@route GET api/user/getUserById/id
//@desc GET UserById
router.get("/:id", getUserById);
module.exports = router;

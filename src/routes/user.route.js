const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
	saveUser,
	getAllUsersDetails,
	deleteUser,
	getUserById,
	getAllUsers,
} = require("../controllers/user.controller");

//@route POST api/user/
//@description Save User
router.post("/", saveUser);

//@route GET api/user/getAllUsersDetails
//@desc Get All Users
router.get("/getAllUsersDetails", getAllUsersDetails);

//@route GET api/user/all
//@desc Get All Users
router.get("/all", getAllUsers);

//@route Delete api/user/id
//@desc Delete User
router.delete("/:id", deleteUser);

//@route GET api/user/getUserById/id
//@desc GET UserById
router.get("/:id", getUserById);
module.exports = router;

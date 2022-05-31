const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
	requestSupervisor,
	getAllSupervisorRequests,
	getPanelMembersMasterData,
} = require("../controllers/requests.controller");

//@route POST api/requests/
//@description request a supervisor form
router.post("/", requestSupervisor);

//@route GET api/allrequests
//@description GET requets
router.get("/all", getAllSupervisorRequests);

//@route GET api/masterData
//@description GET Panel Member master data
router.get("/masterData", getPanelMembersMasterData);

module.exports = router;

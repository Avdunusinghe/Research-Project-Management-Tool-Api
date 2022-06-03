const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
	requestSupervisor,
	getAllSupervisorRequests,
	getPanelMembersMasterData,
	allocatePanelMember,
} = require("../controllers/requests.controller");

//@route POST api/requests/
//@description request a supervisor form
router.post("/", requestSupervisor);

//@route GET api/requests/all
//@description GET requets
router.get("/all", getAllSupervisorRequests);

//@route GET api/requests/masterData
//@description GET Panel Member master data
router.get("/masterData", getPanelMembersMasterData);

//@route GET api/requests/requests
//@description GET Panel Member master data
router.put("/", allocatePanelMember);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  requestSupervisor,
  getAllSupervisorRequests,
} = require("../controllers/requests.controller");

//@route POST api/requests/
//@description request a supervisor form
router.post("/", requestSupervisor);

//@route GET api/allrequests
//@description GET requets
router.get("/all", getAllSupervisorRequests);

module.exports = router;

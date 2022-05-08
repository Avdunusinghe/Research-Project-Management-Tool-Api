const express = require("express");
const router = express.Router();

const { registerTopic } = require("../controllers/topic.controller");

//@route POST api/topic/register
//@description Register topic
router.post("/", registerTopic);

module.exports = router;

const express = require("express");
const router = express.Router();

const { registerTopic, getAllTopics} = require("../controllers/topic.controller");

//@route POST api/topic/register
//@description Register topic
router.post("/", registerTopic);

//@route POST api/topic/all
//@description get all topic
router.get("/all", getAllTopics);

module.exports = router;

const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const auth = require("../middleware/auth");
const {
    saveTopic,
    //getAllTopicDetails,
    deleteTopic,
    getTopicById,
    getAllTopics,
} = require("../controllers/topic.controller");

//@route POST api/topic/
//@description Save topic
router.post("/", saveTopic);

//@route GET api/topic/getAllTopicDetails
//@desc Get All Topics
//router.get("/getAllTopicDetails", getAllTopicDetails);

//@route GET api/topic/all
//@desc Get All Topics
router.get("/all", getAllTopics);

//@route Delete api/topic/id
//@desc Delete Topic
router.delete("/:id", deleteTopic);

//@route GET api/studentGroup/getTopicById/id
//@desc GET TopicById
router.get("/:id", getTopicById);
module.exports = router;
=======

const { registerTopic } = require("../controllers/topic.controller");

//@route POST api/topic/register
//@description Register topic
router.post("/", registerTopic);

module.exports = router;
>>>>>>> 261d3a3a70d7a51d5d38aea107c0677bd613774a

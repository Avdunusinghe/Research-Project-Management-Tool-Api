const Topic = require("../models/topic.model");

const registerTopic = async (request, response) => {
  try {
    let { id, topicName, subjectName, subjectId, groupId } = request.body;

    if (id == null) {
      let topic = new Topic({
        topicName,
        subjectName,
        subjectId,
        groupId,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      if (isSuccess) {
        await topic.save();

        response.status(200).send("Register Topic Successfully");
      } else {
        response.status(400).json("Error,please Try Again");
      }
    } else {
      const isTopicGroupAvailable = await Topic.findById(id);

      if (!isTopicGroupAvailable) {
        return res.status(404).json("Cannot Find the Topic");
      }

      const topicObj = await Topic.findByIdAndUpdate(id, {
        topicName,
        subjectName,
        subjectId,
        groupId,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Topic has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  registerTopic,
};

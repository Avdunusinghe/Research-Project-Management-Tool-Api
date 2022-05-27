const Topic = require("../models/topic.model");
const mongoose = require("mongoose");

const registerTopic = async (request, response) => {
	try {
		let { id, topicName, subject, groupleaderId, groupleadername, groupId, description, isAccept } = request.body;

		if (id == null) {
			let topic = new Topic({
				topicName,
				subject,
				groupleaderId,
				groupleadername,
				groupId,
				description,
				isAccept,
				createOn: new Date().toUTCString(),
				updatedOn: new Date().toUTCString(),
			});

			const isSuccess = true;
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
				subject,
				groupleaderId,
				groupleadername,
				groupId,
				description,
				isAccept,
				updatedOn: new Date().toUTCString(),
			});

			response.status(200).json("Topic has been  Update SuccessFully");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get All topics
*/
const getAllTopics = async (request, response) => {
	try {
		const topics = await Topic.find().select();

		response.json(topics);
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Get Topic By Id
*/

const getTopicById = async (request, response) => {
	try {
		const topicId = request.params.id;
		if (!mongoose.Types.ObjectId.isValid(topicId)) return false;
		if (topicId != null) {
			if (Topic.isAccept == false) {
				const topic = await Topic.findById(topicId).select();
				Topic.updateOne((set = isAccept == true));
				response.json(topic);
			}
		} else {
			return response.status(200).json("Cannot Find Student,Please Try Again");
		}
	} catch (error) {
		response.status(400).json(error.message);
	}
};

/*
Topic evaluation
*/

const evaluateTopics = async (request, response) => {
  try {
		let { id, topicName, subject, groupleaderId, groupleadername, groupId, description, isAccept } = request.body;

    const isTopicGroupAvailable = await Topic.findById(id);

			if (!isTopicGroupAvailable) {
				return res.status(404).json("Cannot Find the Topic");
			}

		const topicObj = await Topic.findByIdAndUpdate(id, {
      isAccept,
      description,
    });

    const topics = await Topic.find().select();
    response.json(topics);
  } catch {
  response.status(400).json(error.message);;
  }
};

module.exports = {
	registerTopic,
	getAllTopics,
	getTopicById,
  evaluateTopics,
};
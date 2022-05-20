const Topic = require("../models/topic.model");
<<<<<<< HEAD
const bcrypt = require("bcrypt");

const saveTopic = async (request, response) => {
  try {
    let {
      id,
      subjectId,
      groupID,
      groupName,
      topicName,
      studentId,
      studentName,
      studentEmail,
    } = request.body;

    if (id == null) {
      let topic = new Topic({
        subjectId,
        groupID,
        groupName,
        topicName,
        studentId,
        studentName,
        studentEmail,
=======

const registerTopic = async (request, response) => {
  try {
    let { id, topicName, subjectName, subjectId, groupId } = request.body;

    if (id == null) {
      let topic = new Topic({
        topicName,
        subjectName,
        subjectId,
        groupId,
>>>>>>> 261d3a3a70d7a51d5d38aea107c0677bd613774a
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

<<<<<<< HEAD
      const isSuccess = sendTopicRegisteredEmail(topicGroupDetails);

      if (isSuccess) {
        await topic.save();

        response.status(200).send("Topic Group has been save Successfully");
      } else {
        response.status(400).json("Error,please contact Supervisor");
      }
    } else {
      const isTopicAvailable = await Topic.findById(id);

      if (!isTopicAvailable) {
        return res.status(404).json("Cannot Find Student Group");
      }

      const topicObj = await Topic.findByIdAndUpdate(id, {
        subjectId,
        groupID,
        groupName,
        topicName,
        studentId,
        studentName,
        studentEmail,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Topic Group has been  Update SuccessFully");
=======
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
>>>>>>> 261d3a3a70d7a51d5d38aea107c0677bd613774a
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

<<<<<<< HEAD
// const getAllTopicDetails = async (request, response) => {
//   const limit = 0;
//   const skip = 0;
//   const totalRecordCount = 0;
//   const totalPageCount = 0;
//   const totalPages = 0;
//   const page = 0;

//   try {
//     const { userRole, searchText } = request.query;

//     let query = await Topic.find();

//     if (userRole > 0) {
//       query = await query.find(userRole);
//     }
//     if (searchText) {
//       query = await query.find(searchText);
//     }

//     page = parseInt(request.query.page) || 1;
//     limit = parseInt(request.query.limit) || 10;
//     skip = (page - 1) * limit;

//     query = query.skip(skip).limit(limit);

//     const studentGroupDetails = await query;

//     totalRecordCount = studentGroupDetails.length;
//     totalPageCount = Math.ceil(totalRecordCount / limit);

//     request.status(200).json({
//       studentGroupDetails,
//       totalRecordCount,
//       totalPageCount,
//     });
//   } catch (error) {
//     response.status(400).json(error.message);
//   }
// };

const deleteTopic = async (request, response) => {
  try {
    const topicId = request.params.id;

    let query = await Topic.findById(topicId);

    if (!query) {
      return response
        .status(200)
        .json("Cannot Find Topic,Please Try Again");
    }

    query = await Topic.findByIdAndDelete(topicId);

    response.status(200).json("Topic has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

const getTopicById = async (request, response) => {
  try {
    const topicId = request.params.id;
    if (topicId != null) {
      response.json(topic);
    } else {
      return response
        .status(200)
        .json("Cannot Find Topic,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllTopics = async (request, response) => {
  try {
    const topicDetails = await Topic.find().select("-password");

    response.json(topicDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveTopic,
  //getAllTopicDetails,
  deleteTopic,
  getTopicById,
  getAllTopics,
};
=======
module.exports = {
  registerTopic,
};
>>>>>>> 261d3a3a70d7a51d5d38aea107c0677bd613774a

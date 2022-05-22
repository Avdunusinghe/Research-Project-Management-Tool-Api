const mongoose = require("mongoose");
const Request = require("../models/requests.model");

/*
 Student Request a supervisor
*/

const requestSupervisor = async (request, response) => {
  try {
    let {
      id,
      groupleaderName,
      groupleaderId,
      groupleaderEmail,
      groupId,
      mobileNumber,
      // role: (role = 1
      // ? UserRole.admin
      //: 2
      //? UserRole.student
      //: UserRole.lecturer),
      description,
      isAccept,
    } = request.body;

    if (id == null) {
      let groupLeader = new Request({
        groupleaderName,
        groupleaderId,
        groupleaderEmail,
        groupId,
        mobileNumber,
        // role: (role = 1
        // ? UserRole.admin
        //: 2
        //? UserRole.student
        //: UserRole.lecturer),
        description,
        isAccept,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      const isSuccess = true;
      if (isSuccess) {
        await groupLeader.save();

        response.status(200).send("Request Supervisor Has Been Successfully ");
      } else {
        response.status(400).json("Error,please try again");
      }
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
  Get All requests
  */
const getAllSupervisorRequests = async (request, response) => {
  try {
    const requests = await Request.find().select();

    response.json(requests);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  requestSupervisor,
  getAllSupervisorRequests,
};

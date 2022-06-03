const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const sendUserRegisteredEmail = require("../utils/email.helper");

/*
Register Supervisor
*/

const saveSupervisor = async (request, response) => {
  try {
    let { 
      id, 
      firstName, 
      lastName, 
      email, 
      mobileNumber, 
      password,
      isSupervisor,
    } = request.body;

    if (id == null) {
      let Supervisor = new User({
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        isSupervisor: true,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      // const supervisorDetails = {
      //   email: supervisor.email,
      //   password: supervisor.password,
      // };

      //const isSuccess = sendSupervisorRegisteredEmail(supervisorDetails);
      const isSuccess = true;

      if (isSuccess) {
        //const salt = await bcrypt.genSalt(10);
        //supervisor.password = await bcrypt.hash(user.password, salt);
        await supervisor.save();

        response.status(200).send("Supervisor has been save Successfully");
      } else {
        response.status(400).json("Error,please contact Admin");
      }
    } else {
      const isSupervisorAvailable = await User.findById(id);

      if (!isSupervisorAvailable) {
        return res.status(404).json("Cannot Find Supervisor");
      }

      const supervisorObj = await User.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        mobileNumber,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Supervisor has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
Get All Supervisor List
*/

const getAllSupervisorDetails = async (request, response) => {
  const limit = 0;
  const skip = 0;
  const totalRecordCount = 0;
  const totalPageCount = 0;
  const totalPages = 0;
  const page = 0;
  try {
    const { userRole, searchText } = request.query;
    let query = await User.find();
    if (userRole > 0) {
      query = await query.find(userRole);
    }
    if (searchText) {
      query = await query.find(searchText);
    }
    page = parseInt(request.query.page) || 1;
    limit = parseInt(request.query.limit) || 10;
    skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    const supervisorDetails = await query;
    totalRecordCount = supervisorDetails.length;
    totalPageCount = Math.ceil(totalRecordCount / limit);
    request.status(200).json({
      supervisorDetails,
      totalRecordCount,
      totalPageCount,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
Delete Supervisor
*/

const deleteSupervisor = async (request, response) => {
  try {
    const supervisorId = request.params.id;
    let query = await User.findById(supervisorId);
    if (!query) {
      return response.status(200).json("Cannot Find User,Please Try Again");
    }
    query = await User.findByIdAndDelete(supervisorId);
    response.status(200).json("Supervisor has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

/*
Get Supervisor By Id
*/

const getSupervisorById = async (request, response) => {
  try {
    const supervisorId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(supervisorId)) return false;
    if (supervisorId != null) {
      const supervisor = await User.findById(supervisorId).select("-password");
      response.json(supervisor);
    } else {
      return response.status(200).json("Cannot Find Supervisor,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
Get All Supervisors
*/

const getAllSupervisors = async (request, response) => {
  try {
    const supervisorDetails = await User.find().select("-password");
    response.json(supervisorDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveSupervisor,
  getAllSupervisorDetails,
  deleteSupervisor,
  getSupervisorById,
  getAllSupervisors,
};
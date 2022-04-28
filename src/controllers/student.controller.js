const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const sendUserRegisteredEmail = require("../utils/email.helper");

const saveStudent = async (request, response) => {
  try {
    let { id, firstName, lastName, email, mobileNumber, password } =
      request.body;

    if (id == null) {
      let student = new User({
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      const studentDetails = {
        email: student.email,
        password: student.password,
      };

      const isSuccess = sendStudentRegisteredEmail(studentDetails);

      if (isSuccess) {
        const salt = await bcrypt.genSalt(10);
        student.password = await bcrypt.hash(user.password, salt);
        await student.save();

        response.status(200).send("Student has been save Successfully");
      } else {
        response.status(400).json("Error,please contact Admin");
      }
    } else {
      const isstudentAvailable = await User.findById(id);

      if (!isUserAvailable) {
        return res.status(404).json("Cannot Find Student");
      }

      const studentObj = await User.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        mobileNumber,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Student has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllStudentDetails = async (request, response) => {
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

    const studentDetails = await query;

    totalRecordCount = studentDetails.length;
    totalPageCount = Math.ceil(totalRecordCount / limit);

    request.status(200).json({
      studentDetails,
      totalRecordCount,
      totalPageCount,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deleteStudent = async (request, response) => {
  try {
    const studentId = request.params.id;

    let query = await User.findById(userId);

    if (!query) {
      return response.status(200).json("Cannot Find User,Please Try Again");
    }

    query = await User.findByIdAndDelete(studentId);

    response.status(200).json("Student has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

const getStudentById = async (request, response) => {
  try {
    const studentId = request.params.id;
    if (studentId != null) {
      const student = await User.findById(studentId).select("-password");
      response.json(student);
    } else {
      return response.status(200).json("Cannot Find Student,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllStudents = async (request, response) => {
  try {
    const studentDetails = await User.find().select("-password");

    response.json(studentDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};
module.exports = {
  saveStudent,
  getAllStudentDetails,
  deleteStudent,
  getStudentById,
  getAllStudents,
};

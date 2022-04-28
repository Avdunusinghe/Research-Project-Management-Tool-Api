const StudentGroup = require("../models/studentgroup.model");
const bcrypt = require("bcrypt");

const sendUserRegisteredEmail = require("../utils/email.helper");

const saveStudentGroup = async (request, response) => {
  try {
    let {
      id,
      groupName,
      subjectName,
      subjectId,
      memberName,
      memberEmail,
      memberId,
    } = request.body;

    if (id == null) {
      let studentgroup = new StudentGroup({
        groupName,
        subjectName,
        subjectId,
        memberName,
        memberEmail,
        memberId,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      const studentGroupDetails = {
        email: studentgroup.email,
        password: studentgroup.password,
      };

      const isSuccess = sendStudentRegisteredEmail(studentGroupDetails);

      if (isSuccess) {
        const salt = await bcrypt.genSalt(10);
        studentgroup.password = await bcrypt.hash(studentgroup.password, salt);
        await studentgroup.save();

        response.status(200).send("Student Group has been save Successfully");
      } else {
        response.status(400).json("Error,please contact Admin");
      }
    } else {
      const isstudentGroupAvailable = await StudentGroup.findById(id);

      if (!isstudentGroupAvailable) {
        return res.status(404).json("Cannot Find Student Group");
      }

      const studentGroupObj = await StudentGroup.findByIdAndUpdate(id, {
        groupName,
        subjectName,
        subjectId,
        memberName,
        memberEmail,
        memberId,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Student  Group has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllStudentGroupDetails = async (request, response) => {
  const limit = 0;
  const skip = 0;
  const totalRecordCount = 0;
  const totalPageCount = 0;
  const totalPages = 0;
  const page = 0;

  try {
    const { userRole, searchText } = request.query;

    let query = await StudentGroup.find();

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

    const studentGroupDetails = await query;

    totalRecordCount = studentGroupDetails.length;
    totalPageCount = Math.ceil(totalRecordCount / limit);

    request.status(200).json({
      studentGroupDetails,
      totalRecordCount,
      totalPageCount,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deleteStudentGroup = async (request, response) => {
  try {
    const studentGroupId = request.params.id;

    let query = await StudentGroup.findById(studentGroupId);

    if (!query) {
      return response
        .status(200)
        .json("Cannot Find Student Group,Please Try Again");
    }

    query = await StudentGroup.findByIdAndDelete(studentGroupId);

    response.status(200).json("Student Group has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

const getStudentGroupById = async (request, response) => {
  try {
    const studentGroupId = request.params.id;
    if (studentGroupId != null) {
      const studentGroup = await StudentGroup.findById(studentGroupId).select(
        "-password"
      );
      response.json(studentGroup);
    } else {
      return response
        .status(200)
        .json("Cannot Find Student Group,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllStudentGroups = async (request, response) => {
  try {
    const studentGroupDetails = await StudentGroup.find().select("-password");

    response.json(studentGroupDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveStudentGroup,
  getAllStudentGroupDetails,
  deleteStudentGroup,
  getStudentGroupById,
  getAllStudentGroups,
};

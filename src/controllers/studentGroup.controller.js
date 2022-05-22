const StudentGroup = require("../models/studentgroup.model");
const mongoose = require("mongoose");

const saveStudentGroup = async (request, response) => {
  try {
    let { id, groupName, subjectName, memberDetails } = request.body;

    if (id == null) {
      let studentgroup = new StudentGroup({
        groupName,
        subjectName,
        memberDetails,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      const isSuccess = true;
      if (isSuccess) {
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
        memberDetails,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("Student  Group has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
Get StudentGroup By Id
*/

const getStudentGroupById = async (request, response) => {
  try {
    const studentgroupId = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(studentgroupId)) return false;
    if (studentgroupId != null) {
      const studentgroup = await StudentGroup.findById(studentgroupId).select();
      response.json(studentgroup);
    } else {
      return response
        .status(200)
        .json("Cannot Find Student Group,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

/*
Get All Students Groups
*/
const getAllStudentsGroups = async (request, response) => {
  try {
    const studentgroupDetails = await StudentGroup.find().select();

    response.json(studentgroupDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveStudentGroup,
  getAllStudentsGroups,
  getStudentGroupById,
};

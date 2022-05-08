const StudentGroup = require("../models/studentgroup.model");

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

module.exports = {
  saveStudentGroup,
};

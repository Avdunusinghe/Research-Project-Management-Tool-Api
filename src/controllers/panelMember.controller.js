const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const sendUserRegisteredEmail = require("../utils/email.helper");

const savePanelMember = async (request, response) => {
  try {
    let { id, firstName, lastName, email, mobileNumber, password } =
      request.body;

    if (id == null) {
      let panelMember = new User({
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        createOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
      });

      // const panelMemberDetails = {
      //   email: panelMember.email,
      //   password: panelMember.password,
      // };

      //const isSuccess = sendPanelMemberRegisteredEmail(panelMemberDetails);
      const isSuccess = true;

      if (isSuccess) {
        //const salt = await bcrypt.genSalt(10);
        //panelMember.password = await bcrypt.hash(user.password, salt);
        await panelMember.save();

        response.status(200).send("PanelMember has been save Successfully");
      } else {
        response.status(400).json("Error,please contact Admin");
      }
    } else {
      const ispanelMemberAvailable = await User.findById(id);

      if (!isUserAvailable) {
        return res.status(404).json("Cannot Find PanelMember");
      }

      const panelMemberObj = await User.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        mobileNumber,
        updatedOn: new Date().toUTCString(),
      });

      response.status(200).json("PanelMember has been  Update SuccessFully");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllPanelMemberDetails = async (request, response) => {
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
    const panelMemberDetails = await query;
    totalRecordCount = panelMemberDetails.length;
    totalPageCount = Math.ceil(totalRecordCount / limit);
    request.status(200).json({
      panelMemberDetails,
      totalRecordCount,
      totalPageCount,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deletePanelMember = async (request, response) => {
  try {
    const panelMemberId = request.params.id;
    let query = await User.findById(panelMemberId);
    if (!query) {
      return response.status(200).json("Cannot Find User,Please Try Again");
    }
    query = await User.findByIdAndDelete(panelMemberId);
    response.status(200).json("PanelMember has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

const getPanelMemberById = async (request, response) => {
  try {
    const panelMemberId = request.params.id;
    if (panelMemberId != null) {
      const panelMember = await User.findById(panelMemberId).select("-password");
      response.json(panelMember);
    } else {
      return response.status(200).json("Cannot Find PanelMember,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllPanelMembers = async (request, response) => {
  try {
    const panelMemberDetails = await User.find().select("-password");
    response.json(panelMemberDetails);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const evaluateTopics = async () => {

};

const evaluateStudentPresentation = async () => {

};

module.exports = {
  savePanelMember,
  getAllPanelMemberDetails,
  deletePanelMember,
  getPanelMemberById,
  getAllPanelMembers,
  evaluateTopics,
  evaluateStudentPresentation,
};
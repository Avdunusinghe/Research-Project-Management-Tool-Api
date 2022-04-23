const User = require("../models/user.model");
const bcrypt = require("bcrypt");

/**
 * @param {user} userData
 * @returns {Document} User document
 */

const saveUser = async (request, response) => {
  try {
    let { firstName, lastName, email, mobileNumber, password } = request.body;

    let user = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      createOn: new Date().toUTCString(),
      updatedOn: new Date().toUTCString(),
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    response.status(200).send("User has been save Successfully");
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllUsersDetails = async (request, response) => {
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

    const userDetails = await query;

    totalRecordCount = userDetails.length;
    totalPageCount = Math.ceil(totalRecordCount / limit);

    request.status(200).json({
      userDetails,
      totalRecordCount,
      totalPageCount,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deleteUser = async (request, response) => {
  try {
    const userId = request.params.id;

    let query = await User.findById(userId);

    if (!query) {
      return response.status(200).json("Cannot Find User,Please Try Again");
    }

    query = await User.findByIdAndDelete(userId);

    response.status(200).json("User has been delete successfully");
  } catch (err) {
    response.status(400).json(err.message);
  }
};

const getUserById = async (request, response) => {
  try {
    const userId = request.params.id;
    if (userId != null) {
      const user = await User.findById(userId).select("-password");
      response.json(user);
    } else {
      return response.status(200).json("Cannot Find User,Please Try Again");
    }
  } catch (error) {
    response.status(400).json(error.message);
  }
};
module.exports = {
  saveUser,
  getAllUsersDetails,
  deleteUser,
  getUserById,
};

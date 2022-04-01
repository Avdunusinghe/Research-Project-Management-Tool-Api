const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const saveUser = async (request, response) => {
  try {
    let { firstName, lastName, email, mobileNumber, password } = request.body;

    let user = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      mobileNumber,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    response.status(200).send("User has been save Successfully");
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const getAllUsersDetails = (request, response) => {
  try {
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveUser,
};

const User = require("../models/user.model");

const saveUser = async (request, response) => {
  try {
    const { firstName, lastName, email, password } = request.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    user = await User.save();

    response.status(200).json("User has been Saved Successfully");
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  saveUser,
};

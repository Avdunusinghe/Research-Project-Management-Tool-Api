const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async (request, response) => {
  try {
    let user = await User.findOne({ email: request.body.email });

    if (!user) {
      return response.json({
        isSuccess: false,
        message: "User Not Resgisterd",
      });
    } else {
      const isValidPassword = await bcrypt.compare(
        request.body.password,
        user.password
      );

      if (!isValidPassword) {
        return response.json({
          isSuccess: false,
          message: "Password Incorrect",
        });
      }

      const token = await user.genarateJwtToken();
      response.header("RPMT-auth-token", token).send();
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  login,
};

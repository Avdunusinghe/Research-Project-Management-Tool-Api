const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async (request, response) => {
  try {
    let user = await User.findOne({ email: request.body.email });

    if (!user) {
      return response.status(400).send("Invalid email or password");
    } else {
      const isValidPassword = await bcrypt.compare(
        request.body.password,
        user.password
      );
      if (!isValidPassword) {
        return response.status(400).send("Invalid email or password");
      }

      const token = user.genarateJwtToken();
      response.send(token);
    }
  } catch (err) {}
};

module.exports = {
  login,
};

const express = require("express");

const auth = async (request, response, next) => {
  console.log("authenticate user");
  next();
};

module.exports = auth;

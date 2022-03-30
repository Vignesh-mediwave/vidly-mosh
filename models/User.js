const Joi = require("Joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 12,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024,
    },
  })
);
function validateUser(genre) {
  const Schema = {
    name: Joi.String().min(5).max(12).required(),
    email: Joi.String().required(),
    password: Joi.String().min(5).max(1024).required(),
  };
  return Joi.validate(genre, Schema);
}

exports.User = User;
exports.validateUser = validateUser;

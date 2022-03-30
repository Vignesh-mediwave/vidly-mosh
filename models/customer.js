const mongoose = require("mongoose");
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    PhoneNumber: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
  })
);

exports.Customer = Customer;

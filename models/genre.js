const mongoose = require("mongoose");
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
});
const Genre = mongoose.model("Geners", genreSchema);

exports.Genre = Genre;
exports.genreSchema = genreSchema;

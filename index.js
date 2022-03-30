const mongoose = require("mongoose");
const express = require("express");

const app = express();

const port = 2000;
const genre = require("./routes/genre");
const single = require("./routes/single");
const customer = require("./routes/customer");
const movies = require("./routes/movies");
const rentals = require("./routes/rental");

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Database connected sucessfully....."))
  .catch((err) => console.log("Error", err));

app.use(express.json());
app.use("/genres", genre);
app.use("/", single);
app.use("/customer", customer);
app.use("/movies", movies);
app.use("/rentals", rentals);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

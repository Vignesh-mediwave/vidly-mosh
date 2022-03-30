const { Genre } = require("../models/genre");
const { Movie } = require("../models/movie");

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  //const genreid = "624194483bf2b3e06cde6ea0";
  const genre = await Genre.findById(req.body.genreID);
  console.log(genre);
  if (!genre) {
    res.send("bad request");
  }
  let movies = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRendalRate,
  });

  movies = await movies.save();
  console.log(movies);
  res.send(movies);
});

module.exports = router;

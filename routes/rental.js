const { Rental, validateRental } = require("../models/rental");
const { Movie } = require("../models/movie");
const { Customer } = require("../models/customer");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const express = require("express");
const router = express.Router();

Fawn.init(mongoose);

router.post("/", async (req, res) => {
  const customer = await Customer.findById(req.body.customerId);
  if (!customer) {
    return res.send("Please Enter CustomerId");
  }
  const movie = await Movie.findById(req.body.movieId);
  if (!movie) {
    return res.send("Please Enter MovieId");
  }

  let rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone,
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
    },
  });

  try {
    new Fawn.Task()
      .save("rentals", rental)
      .update("movies", { _id: movie._id }, { $inc: { numberInStock: -1 } })
      .run();
    res.send(rental);
  } catch (error) {
    res.status(500).send("something failed");
  }
});

exports.router = router;

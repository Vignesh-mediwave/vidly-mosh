const mongoose = require("mongoose");
const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const { Customer } = require("../models/customer");

router.get("/", async (req, res) => {
  const customer = await Customer.find().sort("name");
  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.json({ message: "movie not found" });
  }
  res.send(customer);
});

router.post("/", async (req, res) => {
  let customer = new Customer({
    name: req.body.name,
    isGold: req.body.isGold,
    PhoneNumber: req.body.PhoneNumber,
  });
  customer = await customer.save();
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      PhoneNumber: req.body.PhoneNumber,
    },
    { new: true }
  );
  if (!customer) {
    return res.send("movie not found");
  }
  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer) {
    return res.status(404).send("bad request");
  }
  res.send(customer);
});
module.exports = router;

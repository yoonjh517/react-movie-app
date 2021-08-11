const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.post("/favoriteNumber", (req, res) => {
  // get favorite number from mongodb
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    // send favorite number to the front
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });
});

module.exports = router;

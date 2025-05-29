const express = require("express");
const { calculateCarValue } = require("../carValue/calculateCarValue");
const { validateCarInput } = require("../carValue/validateCarInput");

const router = express.Router();

router.post("/", (req, res) => {
   const { model, year } = req.body;
   const error = validateCarInput(model, year);
   if (error) return res.status(400).json({ error });

   const value = calculateCarValue(model, year);
   res.status(200).json({ value });
});

module.exports = router;
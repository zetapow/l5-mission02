const express = require("express");
const router = express.Router();

const { calculateRiskRating } = require("../calculateRiskRating");

router.post("/risk-rating", (req, res) => {
   console.log("Risk rating request");
   try {
      if (!req.body || typeof req.body !== "object") {
         return res.status(400).json({ error: "body must be JSON" });
      }

      // If string - convert to numbers

      const result = calculateRiskRating(req.body);

      res.json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
   }
});

module.exports = router;

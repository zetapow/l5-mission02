const express = require("express");
const router = express.Router();

const { calculateDiscount } = require("../calculateDiscount");

router.post("/discount", (req, res) => {
   console.log("discount request");
   try {
      const { age, experience } = req.body;

      if (!age || !experience) {
         return res
            .status(400)
            .json({ error: "Please input age and experience" });
      }

      // If string - convert to numbers

      const result = calculateDiscount(Number(age), Number(experience));
      res.json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
   }
});

module.exports = router;

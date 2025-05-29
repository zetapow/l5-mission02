const express = require("express");
const { analyzeClaimHistory } = require("../claimhistory/analyzeClaimHistory");
const { validateClaimInput } = require("../claimhistory/validateClaimInput");

const router = express.Router();

router.post("/", (req, res) => {
   const { numberOfClaims, yearsInsured } = req.body;
   const error = validateClaimInput(numberOfClaims, yearsInsured);
   if (error) return res.status(400).json({ error });

   const riskLevel = analyzeClaimHistory(numberOfClaims, yearsInsured);
   res.status(200).json({ riskLevel });
});

module.exports = router;
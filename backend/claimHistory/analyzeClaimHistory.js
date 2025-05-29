function analyzeClaimHistory(numberOfClaims, yearsInsured) {
   const riskRatio = numberOfClaims / yearsInsured;

   if (riskRatio === 0) return "Low";
   if (riskRatio > 0 && riskRatio <= 0.5) return "Medium";
   return "High";
}


module.exports = { analyzeClaimHistory };

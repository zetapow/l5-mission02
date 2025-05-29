function validateClaimInput(numberOfClaims, yearsInsured) {
   if (typeof numberOfClaims !== "number" || typeof yearsInsured !== "number") {
      return "Claims and years insured must be numbers.";
   }

   if (numberOfClaims < 0 || !Number.isInteger(numberOfClaims)) {
      return "Claims must be a non-negative whole number.";
   }

   if (yearsInsured <= 0 || yearsInsured > 100) {
      return "Years insured must be between 1 and 100.";
   }

   if (numberOfClaims > yearsInsured) {
      return "Claims cannot exceed years insured.";
   }

   return null;
}

module.exports = { validateClaimInput };

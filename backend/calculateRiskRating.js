function calculateRiskRating(input) {
   /* Validate input - return error for each condition */
   if (
      !input || // no input
      typeof input !== "object" || // input must be in json
      !input.claim_history || // must have claim_history
      typeof input.claim_history !== "string" || // claim history = string
      input.claim_history.trim() === "" // Cannot be empty string
   ) {
      return { error: "error" };
   }

   const keywords = ["collide", "crash", "scratch", "bump", "smash"];

   // Eliminate case-sensitivity
   const inputText = input.claim_history.toLowerCase();

   let rating = 0;

   keywords.forEach((keyword) => {
      // g - global, i - case-insensitive, \b - word boundary
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      const matchText = inputText.match(regex);

      if (matchText) {
         // Increase rating for each keyword found
         rating += matchText.length;
      }
   });

   // Minimum rating of 1 and max of 5
   rating = Math.max(1, Math.min(5, rating));

   return { risk_rating: rating };
}

module.exports = { calculateRiskRating };

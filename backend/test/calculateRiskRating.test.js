const { calculateRiskRating } = require("../calculateRiskRating");

describe("Convert claim history to risk rating", () => {
   // Normal case
   test("risk rating of 4 with 4 keywords", () => {
      // keywords = ["collide", "crash", "scratch", "bump", "smash"]
      const input = { claim_history: "crash scratch collide bump" };
      const output = { risk_rating: 4 };
      expect(calculateRiskRating(input)).toEqual(output);
   });

   test("risk rating of 5 with more than 5 keywords", () => {
      const input = {
         claim_history: "crash scratch collide bump crash scratch collide bump",
      };
      const output = { risk_rating: 5 };
      expect(calculateRiskRating(input)).toEqual(output);
   });

   test("risk rating of 1 with no keywords", () => {
      const input = {
         claim_history: "I have had no car accidents",
      };
      const output = { risk_rating: 1 };
      expect(calculateRiskRating(input)).toEqual(output);
   });

   // Boundary case

   // Edge case

   // Error case
   test("error when claim history is empty", () => {
      const input = {
         claim_history: "",
      };
      const output = { error: "error" };
      expect(calculateRiskRating(input)).toEqual(output);
   });

   test("error when there is no claim_history key", () => {
      const input = {
         not_claim_history: "",
      };
      const output = { error: "error" };
      expect(calculateRiskRating(input)).toEqual(output);
   });

   test("error when claim history is not a string", () => {
      const claim = {
         claim_history: 987654321,
      };
      const riskRating = { error: "error" };
      expect(calculateRiskRating(claim)).toEqual(riskRating);
   });
});

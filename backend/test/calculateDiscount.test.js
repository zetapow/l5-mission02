const { calculateDiscount } = require("../calculateDiscount");

describe("Convert driver's age and experience to discount rate", () => {
   // Normal case
   test("driver aged 30 with 5 years experience gets 10% discount", () => {
      expect(calculateDiscount(25, 5)).toEqual({ discount_rate: 10 });
   });

   // Boundary case
   test("driver aged 24 with 4 years experience gets 0% discount", () => {
      expect(calculateDiscount(24, 4)).toEqual({ discount_rate: 0 });
   });

   // Edge case
   test("driver aged 40 with 10 years experience gets 20% discount", () => {
      expect(calculateDiscount(40, 10)).toEqual({ discount_rate: 20 });
   });

   // Error case
   test("negative age or experience", () => {
      expect(calculateDiscount(-30, 10)).toEqual({
         error: "The minimum driving age is 16",
      });
      expect(calculateDiscount(30, -10)).toEqual({
         error: "Driving experience must be positive",
      });
      expect(calculateDiscount(130, 30)).toEqual({
         error: "The maximum driving age is 107",
      });
   });
});

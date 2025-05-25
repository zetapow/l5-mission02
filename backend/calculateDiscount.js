const {
   validateDriverInput,
} = require("../backend/discount/validateDriverInput");

function calculateDiscount(age, experience) {
   // function to validate inputs
   const inputError = validateDriverInput(age, experience);
   if (inputError) return { error: inputError };

   let discount = 0;
   // Initial discounts to pass initial test
   if (age >= 25) discount += 5;
   if (experience >= 5) discount += 5;

   // Additional discounts to pass boundary test
   if (age >= 40) discount += 5;
   if (experience >= 10) discount += 5;

   // Maximum discount is 20%, Math.min(discount, 20)
   return { discount_rate: discount };
}

module.exports = { calculateDiscount };

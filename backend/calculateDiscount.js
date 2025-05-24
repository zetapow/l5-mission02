function validateDriverInput(age, experience) {
   // const to decrease magic numbers
   const MIN_AGE = 16; // Minimum driving age: 16
   const MAX_AGE = 107; // NZ oldest driver: 107

   // Return error messages or null

   if (typeof age !== "number" || typeof experience !== "number") {
      return "Age and experience must be numbers";
   }
   if (!Number.isInteger(age) || !Number.isInteger(experience)) {
      return "Age and experience must be whole numbers";
   }
   if (age < MIN_AGE) return `The minimum driving age is ${MIN_AGE}`;
   if (age > MAX_AGE) return `The maximum driving age is ${MAX_AGE}`;
   if (experience < 0) return "Driving experience must be positive";
   if (experience > age - MIN_AGE)
      return `Your driving experience cannot be greater than ${
         age - MIN_AGE
      } years for ${age}`;

   return null;
}

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

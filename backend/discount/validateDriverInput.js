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
      } years for a ${age} year old`;

   return null;
}

module.exports = { validateDriverInput };

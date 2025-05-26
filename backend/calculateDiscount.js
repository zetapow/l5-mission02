const {
   validateDriverInput,
} = require("../backend/discount/validateDriverInput");
// Seperate config for discounts
// const { DISCOUNT_RULES } = require("./discount/discountRules");
const {
   AGE_BRACKETS,
   EXPERIENCE_BRACKETS,
   MAXIMUM_DISCOUNT,
} = require("./discount/discountRules");

function calculateDiscount(age, experience) {
   // function to validate inputs
   const inputError = validateDriverInput(age, experience);
   if (inputError) return { error: inputError };

   let discount = 0;

   AGE_BRACKETS.forEach((element) => {
      if (age >= element.limit) discount += element.value;
   });
   EXPERIENCE_BRACKETS.forEach((element) => {
      if (experience >= element.limit) discount += element.value;
   });

   /* Limit maximum discount to 20%, Math.min(discount, 20) */
   return {
      discount_rate: Math.min(discount, MAXIMUM_DISCOUNT),
   };
}

module.exports = { calculateDiscount };

/** Original calc */
/*
   // Initial discounts to pass initial test
   if (age >= 25) discount += 5;
   if (experience >= 5) discount += 5;

   // Additional discounts to pass boundary test
   if (age >= 40) discount += 5;
   if (experience >= 10) discount += 5;
   */

const {
   validateDriverInput,
} = require("../backend/discount/validateDriverInput");
const {
   AGE_BRACKETS,
   EXPERIENCE_BRACKETS,
   MAXIMUM_DISCOUNT,
} = require("./discount/discountRules");

/** params - age (years), experience (years) */
function calculateDiscount(age, experience) {
   // return error if inputs are invalid
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

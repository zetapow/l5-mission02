function calculateCarValue(model, year) {
   const carModel = model.toLowerCase();
   let charSum = 0;

   for (const char of carModel) {
      const code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
         charSum += code - 96; // a=1, b=2, ...
      }
   }

   return charSum * 100 + parseInt(year, 10);
}

module.exports = { calculateCarValue };
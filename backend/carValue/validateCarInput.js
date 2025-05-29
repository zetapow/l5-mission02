function validateCarInput(model, year) {
   const MIN_YEAR = 1900;
   const CURRENT_YEAR = new Date().getFullYear();

   if (typeof model !== "string" || !model.trim()) {
      return "Car model must be a non-empty string.";
   }

   const yearNum = parseInt(year, 10);
   if (isNaN(yearNum) || yearNum < MIN_YEAR || yearNum > CURRENT_YEAR) {
      return `Year must be between ${MIN_YEAR} and ${CURRENT_YEAR}`;
   }

   return null;
}

module.exports = { validateCarInput };
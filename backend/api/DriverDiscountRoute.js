const { calculateDiscount } = require("../calculateDiscount");

app.post("/api/discount", (req, res) => {
   const { age, experience } = req.body;
   const result = calculateDiscount(age, experience);
   res.json(result);
});

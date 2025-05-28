const express = require("express");
const router = express.Router();

const { calculateQuote } = require("../calculateQuote");

router.post("/quote", (req, res) => {
    console.log("Quote request")
    try{
        const { car_value, risk_rating } = req.body;
        
        if (!car_value || !risk_rating) {
            return res
            .status(400)
            .json({ error: "Enter car value and risk rating "});
        }

        const result = calculateQuote(Number(car_value), Number(risk_rating))
        res.json({result});
        console.log(result)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "There has been an error in the server" });
    }
});

module.exports = router;
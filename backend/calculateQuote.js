const { MIN_RATING, MAX_RATING, CAR_LIMIT, PREMIUM_RATE, MONTHS_IN_A_YEAR } = require("./quote/CarValueAndRiskRating") 

function calculateQuote(car_value, risk_rating) {

    //Unneccesary, will delete when certain its working
    // const car_value = car_value;
    // const risk_rating = risk_rating;

        try{ //Checking if variables pass the initial checks, otherwise throw an error
            if (
                typeof car_value !== 'number' ||
                typeof risk_rating !== 'number' ||
                risk_rating < MIN_RATING ||
                risk_rating > MAX_RATING ||
                car_value <= 0 ||
                car_value > CAR_LIMIT
            ) {
                throw new Error();
            }
            
            //Calculations for the Quotes
            const yearly = (car_value * risk_rating) / PREMIUM_RATE;
            const monthly = yearly / MONTHS_IN_A_YEAR;

            //returns values back after calculations
            return {
                monthly: parseFloat(monthly.toFixed(1)),
                yearly: parseFloat(yearly.toFixed(1)),
            };

        } catch{ //Error message
            return {error: 'Sorry, there has been an error'}
        }

}

module.exports = { calculateQuote };

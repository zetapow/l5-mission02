function calculateQuote(car_value, risk_rating) {

    //Brings objects into variables
    const car = car_value;
    const rating = risk_rating;

        try{ //Checking if variables pass the initial checks, otherwise throw an error
            if (
                typeof car !== 'number' ||
                typeof rating !== 'number' ||
                rating < 1 ||
                rating > 5 ||
                car <= 0
            ) {
                throw new Error();
            }
            
            //Calculations for the Quotes
            const yearly = (car * rating) / 100;
            const monthly = yearly / 12;

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

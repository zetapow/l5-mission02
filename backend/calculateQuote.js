function calculateQuote(input) {

        try{
        const input = {car_value, risk_rating};

        if (
            typeof car_value !== 'number' ||
            typeof risk_rating !== 'number' ||
            risk_rating < 1 ||
            risk_rating > 5 ||
            car_value <= 0
        ) {
            throw new Error();
        }

        const yearly = (car_value * risk_rating) / 100;
        const monthly = yearly / 12;

        return {
            monthly: parseFloat(monthly.toFixed(2)),
            yearly: parseFloat(yearly.toFixed(2)),
        };
        
    } catch{
        return {error: 'Sorry, there has been an error'}
    }

}

module.exports = { calculateQuote };

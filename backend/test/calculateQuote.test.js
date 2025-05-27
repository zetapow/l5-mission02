const { calculateQuote } = require('../calculateQuote')

describe('Covert model and year of car into Car Value', () => {
    //Normal case
    test("Car value 6614, risk rating 5, display monthly 27.5 and yearly 330", () => {
        const result = calculateQuote({ car_value: 6614, risk_rating: 5});
        expect(result).toEqual({ monthly: 27.5, yearly: 330});
    })

    //Boundary case
    test("Car value 6614, risk rating 1, testing lowest boundary", () => {

    })
    //Error cases
    test("ERROR Car value is a string", () =>{

    })

    test("ERROR Risk rating is out of scope", () => {

    })

    test("ERROR Car value is null", () => {

    })

    test("ERROR Risk rating is null", () =>{

    })

})
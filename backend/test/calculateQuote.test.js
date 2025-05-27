const { calculateQuote } = require('../calculateQuote')

describe('Covert model and year of car into Car Value', () => {
    //Normal case
    test("Car value 6614, risk rating 5, display monthly 27.5 and yearly 330", () => {
        expect(calculateQuote(6614, 5)).toEqual({ monthly: 27.6, yearly: 330.7 });
    })

    //Boundary case
    test("Car value 6614, risk rating 1, testing lowest boundary", () => {
        expect(calculateQuote(6614, 1)).toEqual({ monthly: 5.5, yearly: 66.1 })
    })

    //Error cases (including edge case)
    test("ERROR Car value is a string", () =>{
        expect(calculateQuote("burger", 5)).toEqual({ error: 'Sorry, there has been an error' })
    })

    test("ERROR Car value is larger than 10000", () => {
        expect(calculateQuote(10001, 5)).toEqual({ error: 'Sorry, there has been an error'})
    })

    test("ERROR Risk rating is out of scope", () => {
        expect(calculateQuote(6614, 6)).toEqual({ error: 'Sorry, there has been an error' })
    })

    test("ERROR Car value is null", () => {
        expect(calculateQuote("", 5)).toEqual({ error: 'Sorry, there has been an error' })
    })

    test("ERROR Risk rating is null", () =>{
        expect(calculateQuote(6614, "")).toEqual({ error: 'Sorry, there has been an error' })
    })

})
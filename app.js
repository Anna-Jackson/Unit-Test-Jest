const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    const dollars = fromEuroToDollar(1)
    const expected = 1 * 1.2; 
    expect(fromEuroToDollar(1)).toBe(1.2);
})

test("One Dollar should be 125.58 Yen", function(){
    const yen = fromDollarToYen(1)
    const expected = 1 * 125.58; 
    expect(fromDollarToYen(1)).toBe(125.58);
})

test("One Yen should be .0061 Pound", function(){
    const Pound = fromYenToPound(1)
    const expected = 1 * .0061; 
    expect(fromYenToPound(1)).toBe(.0061);
})


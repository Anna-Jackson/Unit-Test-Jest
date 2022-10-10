const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 125.58;
    return valueInYen;
}

const fromYenToPound= function(valueInYen){
    let valueInPound = valueInYen * .0061;
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

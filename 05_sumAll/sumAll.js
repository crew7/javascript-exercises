const sumAll = function(lowerNumber, higherNumber) {
    if (lowerNumber < 0 || higherNumber < 0) {
        return 'ERROR';
    }
    if (typeof(lowerNumber) != 'number' || typeof(higherNumber) != 'number' ){
        return 'ERROR';
    }
    let sumOfNumbers = 0;
    if (lowerNumber > higherNumber) {
        const temp = lowerNumber;
        lowerNumber = higherNumber;
        higherNumber = temp;
    }

    while (lowerNumber <= higherNumber) {
        sumOfNumbers += lowerNumber;
        ++lowerNumber;
    }
    return sumOfNumbers;
};

console.log(sumAll(7,5))

// Do not edit below this line
module.exports = sumAll;

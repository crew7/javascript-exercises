const reverseString = function(reverseInput) {
    reverseInput = reverseInput.split('');
    reverseInput = reverseInput.reverse();
    reverseInput = reverseInput.join('');
    return reverseInput;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;

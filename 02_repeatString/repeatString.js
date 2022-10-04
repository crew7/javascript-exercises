const repeatString = function(string, num) {
    let myString = ''
    if (num < 0) return 'ERROR';
    for (let counter = 0; counter < num; ++counter) {
        myString += string;
    }
    
    return myString;
};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (palindrome) {
    basicString = palindrome.replace(/[^a-zA-Z]/g, "");
    basicString = basicString.toLowerCase();
    reversedString = basicString.split('')
                                .reverse()
                                .join('');
    return reversedString === basicString;
};


// Do not edit below this line
module.exports = palindromes;

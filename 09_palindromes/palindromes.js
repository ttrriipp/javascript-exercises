//racecar
//single words
// punctuation
//upper-case letters
//numbers
//multiple words

const palindromes = function (str) {
    return Array.from(str).reverse().filter(char => /[^\W_]/.test(char)).join('').toLowerCase() == [...str].filter(char => /[^\W_]/.test(char)).join('').toLowerCase();
};

console.log(palindromes("Racecar!"));


// Do not edit below this line
module.exports = palindromes;

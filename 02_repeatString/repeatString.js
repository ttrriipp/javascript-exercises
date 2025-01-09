const repeatString = function(string, num) {
    let repeatString = "";
    for (let i = 0; i < num; i++) {
        repeatString += string;
    }
    if (num < 0) return "ERROR"
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

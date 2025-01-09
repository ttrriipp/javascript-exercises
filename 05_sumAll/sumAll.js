const sumAll = function(first, last) {
    sum = 0;

    if (first < 0 || last < 0 ||
        typeof first != "number" ||
        typeof last != "number" ||
        first != Math.trunc(first) ||
        last != Math.trunc(last)) {
        return "ERROR"; 
    } else if (last >= first) {
        for (let i = first; i <= last; i++) {
            sum += i;
        }
    } else {
        for (let i = last; i <= first; i++) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;

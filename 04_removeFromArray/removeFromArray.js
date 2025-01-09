const removeFromArray = function(array, ...args) {
    array = array.filter(item => !args.includes(item));
    return array;

};

console.log(removeFromArray([1,2,3,4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;

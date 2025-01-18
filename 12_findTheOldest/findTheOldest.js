const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
},
    ]

const currentDate = new Date();
const findTheOldest = function(array) {
    return array.reduce((acc, curr) => { 
        if ((curr.yearOfDeath - curr.yearOfBirth) > (acc.yearOfDeath - acc.yearOfBirth) || (curr.yearOfDeath - curr.yearOfBirth) > (currentDate.getFullYear() - acc.yearOfBirth)) {
            acc = curr;
            return acc;
        }
    return acc;
    }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;

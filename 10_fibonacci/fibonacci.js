const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num == 1){
        return 1;
    }
    num = Number(num);
    let sum = 0;
    let F = [0, 1];
    for (let i = 1; i < num; i++) {
        sum = F[0] + F[1]; //1 , 2, 3
        F[0] = F[1]; // 1, 1
        F[1] = sum; // 1, 2
    }
    return sum;
};
console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;

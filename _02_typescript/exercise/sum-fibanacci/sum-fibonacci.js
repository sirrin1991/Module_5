var listFibonacci = function (x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    return listFibonacci(x - 1) + listFibonacci(x - 2);
};
console.log("Dãy fibonacci :");
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(listFibonacci(i));
    sum += listFibonacci(i);
}
console.log("Tổng của dãy fibonacci :" + sum);

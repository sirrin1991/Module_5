let fibonacciNumber = (x:number) : number =>{
    if(x === 0){
        return 0;
    }
    if(x===1){
        return 1;
    }
    return fibonacciNumber(x-1) + fibonacciNumber(x-2);
};
console.log("Dãy fibonacci :");
let sum : number = 0;
for (let i = 0 ; i < 10 ; i ++){
    console.log(fibonacciNumber(i));
    sum += fibonacciNumber(i);
}
console.log("Tổng của dãy fibonacci :" + sum);

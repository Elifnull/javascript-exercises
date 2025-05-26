const fibonacci = function(num1) {
    const num = parseInt(num1);
    if( typeof num === "number" && num > -1){
        const fibonacciArray = [0,1,1];
        if (num < 3){
            return fibonacciArray[num];
        }
        else {
        for(let i=3; i <= num; i++){
            fibonacciArray[i] = fibonacciArray[i-1]+fibonacciArray[i-2];
        }
        }
        return fibonacciArray[num];
     } else {
        return "OOPS";
     }
};

// Do not edit below this line
module.exports = fibonacci;

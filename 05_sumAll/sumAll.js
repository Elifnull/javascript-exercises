const sumAll = function(num1,num2) {
    let sum = 0;
    let numberArray =[num1,num2].sort((a,b)=> a-b);
    console.log(Math.floor(num1));
    console.log(typeof(num1));
    if(typeof(num1)!== "number" || typeof(num2)!== "number" || num1 < 0 || num2 < 0 
        || Math.floor(num1)< num1 || Math.floor(num2)< num2){
        return "ERROR"
    }
    else{
    for(let i = numberArray[0]; i <= numberArray[1]; i++){
        sum += i;
    }
}
    console.log(sum);
    return sum
};

sumAll(4.111,1);
// Do not edit below this line
module.exports = sumAll;

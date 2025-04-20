const removeFromArray = function(array, ...removeNum) {
    let removeArray = [...removeNum];
    let finalArray = array.filter((number)=>!removeArray.includes(number));
    console.log(finalArray);
    return finalArray;
};


removeFromArray([1,2,4,5,6,7,4],1,2,3,4);

// Do not edit below this line
module.exports = removeFromArray;


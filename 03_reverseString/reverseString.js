const reverseString = function(string) {
    let stringLength = string.length;
    let outputString = "";
    while( stringLength > 0){
        outputString+=string.charAt(stringLength-1);
        stringLength--;
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;

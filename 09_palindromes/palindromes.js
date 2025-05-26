

const palindromes = function (string) {
    const lettersOnlyString = string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const stringLength = lettersOnlyString.length;
    let left = 0;
    let right = stringLength - 1;

    while (left < right){
        if(lettersOnlyString[left]===lettersOnlyString[right]){
            left++;
            right--;
        } else {
            return false;
        }
    } return true;
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;

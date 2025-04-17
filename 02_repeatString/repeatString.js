const repeatString = function(string, num) {
   let sentance ="";
   if (num >= 0){
        while (num > 0){
            sentance += string;
            num--;
        }
        return sentance;
    } else if (num < 0){
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;



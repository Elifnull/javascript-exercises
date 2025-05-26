const getTheTitles01 = function(array) {
    return array.reduce((cummilative, current) =>{
        cummilative.push(current["title"]);
        return cummilative;
    },[]);
};

const getTheTitles = function(array){
    return array.map((array) => array["title"]);
};

// Do not edit below this line
module.exports = getTheTitles;

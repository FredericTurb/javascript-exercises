const repeatString = function(string, num) {

    let myReturn = "";

    if(num < 0) return "ERROR";

    for(let i = 0; i < num; i++)
    {
        myReturn = myReturn + string;
    }
    return(myReturn);
};

// Do not edit below this line
module.exports = repeatString;

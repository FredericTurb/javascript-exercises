const reverseString = function(string) {

    let myArray = [];
    let reverseArray = [];

    let returnString = "";

    myArray = string;

    x = myArray.length;
    y = x -1;
    z = 0;

    for(let i = 0; i < x; i++)
    {
        reverseArray[y] = myArray[z];
        z++;
        y--;        
    }
    returnString = reverseArray.join("");
    return(returnString);

}

// Do not edit below this line
module.exports = reverseString;

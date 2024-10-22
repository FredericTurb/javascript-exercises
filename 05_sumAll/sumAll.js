const sumAll = function(numberOne, numberTwo) {

    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo))
        return("ERROR");
    if (numberOne < 0 || numberTwo < 0)
        return("ERROR");

    let swap = 0;

    if (numberOne > numberTwo){
        swap = numberOne;
        numberOne = numberTwo;
        numberTwo = swap;}
        
    let totalSum = 0;
    
    for (let i = numberOne; i <= numberTwo; i++)
        {
            totalSum = totalSum + i;
        }
    return(totalSum);
}            

// Do not edit below this line
module.exports = sumAll;

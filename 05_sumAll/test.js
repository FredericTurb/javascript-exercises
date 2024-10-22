

function sumAll (numberOne, numberTwo)
{
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo))
        console.log("ERROR");
    if (numberOne < 0 || numberTwo < 0)
        console.log("ERROR");

    let swap = 0;

    if (numberOne > numberTwo){
        swap = numberOne;
        numberOne = numberTwo;
        numberTwo = swap;}
        
    console.log(numberOne);
    console.log(numberTwo);
    let totalSum = 0;
    
    for (let i = numberOne; i <= numberTwo; i++)
        {
            totalSum = totalSum + i;
        }
    console.log(totalSum);
}        
sumAll(123, 1);
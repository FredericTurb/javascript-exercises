function getAdd(firstNb, secNb)
{return(firstNb + secNb);}

function getSubtract(firstNb, secNb)
{return(firstNb - secNb);}

function getSum(mySum)
{   let count = 0;

    for (let i = 0; i < mySum.length; i++)
    {count = count + mySum[i];}
    return(count);}

function getMultiply(mySum)
{   let count = 1;

    for (let i = 0; i < mySum.length; i++)
    {count = count * mySum[i];}
    return(count);
}

function getPower(myFirst, mySec)
{
    let myResult = 1;

    for (let i = 0; i < mySec; i++)
    {myResult = myResult * myFirst;}
    return(myResult);
}

function getFactorial(myInt)
{
    let myResult = 1;

    if(myInt === 0)
    {return(0);}
    for(let myCount = myInt; myCount > 1; myCount--)
    {myResult = myResult * myCount;}
    return(myResult);
}

myInt = 10;
myResult = getFactorial(myInt);
console.log(myResult);
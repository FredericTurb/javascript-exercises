function convertToCelsius (cToF)
{
    let mySub = cToF - 32;
    let myDiv = 5 / 9;

    let myResult = mySub * myDiv;

    myResult = Math.round(myResult * 10) / 10;

    console.log(myResult);


}

let cToF = (-100);
convertToCelsius(cToF)

// 
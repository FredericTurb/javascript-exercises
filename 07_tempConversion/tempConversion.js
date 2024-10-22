const convertToCelsius = function(passedTemp) 
{
    let mySub = passedTemp - 32;
    let myDiv = 5 / 9;

    let myResult = mySub * myDiv;

    let myRounded = Math.round(myResult * 10) / 10;

    return(myRounded);
};

const convertToFahrenheit = function(passedTemp) {

    let myMult = 9 / 5;

    let myDiv = passedTemp * myMult;

    let myResult = myDiv + 32;

    let myFinal = Math.round(myResult * 10) / 10;

    return(myFinal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

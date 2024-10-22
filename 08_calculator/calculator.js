const add = function(firstNb, secNb) {
	return(firstNb + secNb);
};

const subtract = function(firstNb, secNb) {
	return(firstNb - secNb)
};

const sum = function(mySum) {
	let count = 0;

    for (let i = 0; i < mySum.length; i++)
    {count = count + mySum[i];}
    return(count);
};

const multiply = function(mySum) {
  let count = 1;

  for (let i = 0; i < mySum.length; i++)
  {count = count * mySum[i];}
  return(count)
};

const power = function(myFirst, mySec) {
  let myResult = 1;

  for (let i = 0; i < mySec; i++)
  {myResult = myResult * myFirst;}
  return(myResult);
};

const factorial = function(myInt) {
  let myResult = 1;

  if(myInt === 0)
  {return(1);}
  for(let myCount = myInt; myCount > 1; myCount--)
  {myResult = myResult * myCount;}
  return(myResult);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

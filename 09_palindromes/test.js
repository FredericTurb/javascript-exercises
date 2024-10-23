

function palindromes(myString)
{
    let myArray = myString.split("");
    let myReverse = [];

    let myArrayTotal = myArray.length;

    let y = 0;

    // STEP 1 : REVERSED AND SENT TO AN ARRAY => 

    for (let i = (myArray.length - 1); i >= 0 ; i--)
    {
        myReverse[y] = myArray[i];
        y++;
    }

    // STEP 2 : COMPARE IF THEY ARE EQUAL.

    let myReverseLength = myReverse.length - 1;

    y = 0;
    console.log(y);
    console.log(myReverse, "REVERSE BEFORE LOOP");
    console.log(myReverse[0], "AFTER LOOP REVERSE LAST INDEX");

    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[myArrayTotal] ===  )
    }
}



// myArray   = OKPD
// myReverse = DPKO


let myString = 'oui';
myResult = palindromes(myString);
// console.log(myResult);
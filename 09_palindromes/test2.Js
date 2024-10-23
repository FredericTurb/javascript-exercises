function isPalindrome(myString){

    let myLower = myString.toLowerCase();
    let myArray = myLower.split("");

    let size = myArray.length - 1;

    for (let i = 0; i < size; i++) {
        while (i < size && !/^[a-z]$/.test(myArray[i])) {
            i++;
        }
        while (i < size && !/^[a-z]$/.test(myArray[size])) {
            size--;
        }
        if (myArray[i] !== myArray[size]) {
            return "False";
        }
        size--;
    }
    
    return "True";
}

let myString = 'racecar!';
let myResult = isPalindrome(myString);

console.log(myResult);
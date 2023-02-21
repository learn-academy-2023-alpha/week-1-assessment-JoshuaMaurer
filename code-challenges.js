// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.


// Pseudo code:
// Create a function called boilingTemp. 
// This function will take the input number called thermalReading.
// If the thermalReading is less that 212 degrees Fahrenheight, the return will be "degrees Fahrenheight is way too cold, turn up the heat!"
// If the thermalReading is at exactly 212 degrees Fahrenheight, the return will be "degrees Fahrenheight is THE exact tempure of boiling!"
// If the thermalReading is more than 212 degrees Fahrenheight, the return will be "degrees Fahrenheight is a bit more than a rolling boil. This pot obviously has not been watched!"
// anything ELSE use as a catch all error.

const boilingTemp = (thermalReading) => {
    if (thermalReading < 212) {
        return `"${thermalReading} is below boiling point"`
    } else if (thermalReading === 212) {
        return `"${thermalReading} is at boiling point"`
    } else if (thermalReading > 212) {
        return `"${thermalReading} is above boiling point"`
    } else {
        return "Error. Well that obviously didn't work. You should probably try again usuing an actual number."
    }
}

const temp1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingTemp(temp1));

const temp2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingTemp(temp2));

const temp3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingTemp(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Create a variable called iLikeTheTwinsMore
// This this variable will take an concatinate the two gicen arrays into the new variable.
// log the variable iLikeTheTwinsMore with .length the get the required index output.



const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
const iLikeTheTwinsMore = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

console.log(iLikeTheTwinsMore.length);
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// console.log the variable currentCohort
// .split() to place the string into an array
// add "" to split to place every char into into its own item in the array
//.reverse to reverse the index order
//.join("") to convert the array back into a string and remove all commas
const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"
console.log(currentCohort.split("").reverse().join(""))
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// console.log the myNumbers array
// use the method .lastGivenIndex()
// pass the given value variable into the parens of the method

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const lastGivenIndex = (givenValue) => {
    for (let i = myNumbers.length -1; i >= 0; i--) {
        if (myNumbers[i] === givenValue) {
            return i
        } 
    }
}

//Function created because I need the practice!
const givenValue1 = 42
// Expected output: 7
console.log(lastGivenIndex(givenValue1));
console.log(myNumbers.lastIndexOf(givenValue1));

const givenValue2 = 10
// Expected output: 8
console.log(lastGivenIndex(givenValue2));
console.log(myNumbers.lastIndexOf(givenValue2));

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//console.log the array variable
//use .sort() to sort the number assending
//add .reverse() to reverse the assending number to decending


const turnAround = (number1, number2) => {
    return number2 - number1
}
//Function created because I need the practice!
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoSummerTemperatures.sort(turnAround));
console.log(sanDiegoSummerTemperatures.sort().reverse());

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(sanDiegoWinterTemperatures.sort(turnAround));
console.log(sanDiegoWinterTemperatures.sort().reverse());
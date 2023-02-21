// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10 - number of char in the variable. I forgot that zero index does not apply here.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: 0 - [4] indicates the 5th letter in the string since zero index is applicable here.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: "Ruby" - Zero index applies. The index of 1 calls out the second element in the languages array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Will not run.
// b) Verify and explain: weekendDays.toUpperCase is not a function - Can not use toUpperCase on an array. The array must be converted to a string first.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain:number - I did not know what "typeof" did prior too this. However if I had thought about it a little more, the logic behind the naming of the operator, i could have made a slightly better educated guess. typeof returns a string of the operands value. With the .length changing the array from strings to numbers. 

/*
// Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
*/

// Function to compute Body Mass Index (BMI) based on mass and height
function computeBMI(weight, height) {
    return weight / (height * height);
}

/* 
  Test Data 1
  Units: 
  - mass in kg
  - height in meters
*/
let markMass1 = 78; 
let markHeight1 = 1.68; 
let johnMass1 = 92; 
let johnHeight1 = 1.95;

/* 
  Test Data 2
  Units: 
  - mass in kg
  - height in meters
*/
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Computing BMIs for Test Data 1
let markBMI1 = computeBMI(markMass1, markHeight1);
let johnBMI1 = computeBMI(johnMass1, johnHeight1);

// Create boolean variable for Test Data 1

console.log(`Mark's BMI (Test Data 1): ${markBMI1.toFixed(2)} kg/m\u00B2`);
console.log(`John's BMI (Test Data 1): ${johnBMI1.toFixed(2)} kg/m\u00B2`);


// Computing BMIs for TEst Data 2

let markBMI2 = computeBMI(markMass2, markHeight2);
let johnBMI2 = computeBMI(johnMass2, johnHeight2);

console.log(`Mark's BMI (Test Data 2): ${markBMI2.toFixed(2)} kg/m\u00B2`);
console.log(`John's BMI (Test Data 2): ${johnBMI2.toFixed(2)} kg/m\u00B2`);

// Compare BMIs for both Test Data sets
// Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`In Test Data 1, is Mark's BMI higher than John's? ${markHigherBMI1}`);

// Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`In Test Data 2, is Mark's BMI higher than John's? ${markHigherBMI2}`);

// Print output for Test Data 1
if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)} kg/m\u00B2) is higher than John's (${johnBMI1.toFixed(2)} kg/m\u00B2)!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(2)} kg/m\u00B2) is higher than Mark's (${markBMI1.toFixed(2)} kg/m\u00B2)!`);
}

// Print output for Test Data 2
if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)} kg/m\u00B2)!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(2)} kg/m\u00B2) is higher than Mark's (${markBMI2.toFixed(2)} kg/m\u00B2)!`);
}
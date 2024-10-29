/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass/height ** 2 = mass / (height * height). (mass in kg and height in meters).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.
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
console.log(`In Test Data 1, is Mark's BMI higher than John's? ${markHigherBMI1} kg/m\u00B2`);

// Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`In Test Data 2, is Mark's BMI higher than John's? ${markHigherBMI2} kg/m\u00B2`);









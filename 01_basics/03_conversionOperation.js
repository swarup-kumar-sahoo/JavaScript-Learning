let score = "swarup"

console.log(typeof score); 
console.log(typeof (score)); // Good Practice

let valueScore = Number(score);
console.log(valueScore);
console.log(typeof valueScore);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = ""
let isLoggedInMan = "Swarup"
let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedInMan = Boolean(isLoggedInMan)
console.log(booleanIsLoggedIn);  // Empty string is false
console.log(booleanIsLoggedInMan); // Non empty string is true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let firstName = "Swarup"
let middleName = "Kumar"
let lastName = "Sahoo"
let fullName = firstName + " " + middleName + " " + lastName
console.log(fullName);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log( (3 + 4) * 5 % 3);
console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // Not a best practice

let gameCounter = 100
++gameCounter; // Increment by 1
console.log(gameCounter);
--gameCounter; // Decrement by 1
console.log(gameCounter);

// ecma script docs => https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

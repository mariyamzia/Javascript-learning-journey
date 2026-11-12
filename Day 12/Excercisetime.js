console.log("Practicing concepts throungh ecxercises.");
console.log("Level: Easy");
// Exercise 1: Variable introduction:

let name = "Mariyam Zia";
let age = 20;
let country = "Pakistan";
let learning = "Javascript";

console.log(`Hello! My name is ${name} and I am ${age} years old, I live in ${country} and currently I'am learning ${learning}.`);

// Exercise 2: Data types:

let string1 = "I'am future AI Engineer";
let number1 = 224;
let boolean1 = true;
let null1 = null;
let undef = undefined;

console.log(string1,number1,boolean1,null1, undef);

console.log(typeof string1, typeof number1, typeof bolean1, typeof null1,typeof undef);

// Exercise 3: Even or odd:

let num = 29;

if (num%2===0) {
    console.log("The number is Even");
}
else{
    console.log("The number is Odd");
}
console.log(num);

// Exercise 4: String length:

let myName = "Mariyam Zia";

let fullName = myName.length;
console.log(`The number of characters in this string is ${fullName}`);


// Exercise 5: Array basics:

let favLanguage = ["Python","CSS","C","C++","Javascript"];

 let favLanguage1 = favLanguage[0];
//  let favLanguage2 = favLanguage.slice(-1);
 let favLanguage2 = favLanguage.at(-1);

console.log(`My favorite languages are ${favLanguage1} and ${favLanguage2}.`);
// Useing logical opertaor to find the age of a person rather lies between 10 or 20?

let age = 9;

if(age>=10 && age<20){
    console.log('Your age lies between 10 and 20.')
}
else{
    console.log('Your age does not lie between 10 and 20.')
}

// Write a javascript program to decide wether the given number is divisible by 2 or 3?

let number = 9;

if (number % 2 == 0 || number % 3 == 0) {
    console.log(`${number} is divisible by 2 or 3.`);
} else {
    console.log(`${number} is NOT divisible by either 2 or 3.`);
}

// Print 'you can drive' or 'you cannot drive' based on age 18 using ternary operator.


let age1 = 17;

let age2 = age1==18 ? 'You can drive' : 'You cannot drive'
console.log(age2)
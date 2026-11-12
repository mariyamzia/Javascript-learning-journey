console.log("Level 2");

// Exercise 6 — Multiplication table;

// function multiply(num, limit) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * num);

//         if (i*num === _limit) {
//             break
//         }
//         else {
//             continue
//         }
//     };
// }
// multiply(3, 15);

// 2nd method;
// funct

// Exercise 7 — Reverse a string using loop not reverse method;

// function reverseStr(string) {

//     let reversed = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversed += string[i];
//     }

//   return reversed;
// }
// console.log(reverseStr("Noor"));

// Exercise 8 — Find the largest number

// Given this array:
// let numbers = [12, 45, 7, 89, 23, 56];


// Write a function that finds and returns the largest number. Don't use Math.max().

// Exercise 8 — Find the largest number without using max function;

// let num = [12, 45, 927, 89, 23, 56];

// Using max function;
// let maxNum = Math.max(...num);
// console.log(maxNum);

// Using for loop;

// let maxNum = num[0];
// for(let i = 1; i<num.length; i++){
//     if(num[i]>maxNum){
//         maxNum = num[i]
//     }
// }
// console.log(maxNum); 
// function findNum(num){

//     if (num.length===0){
//         return undefined
//     }
//     let maxNum = num[0];
//     for(let i = 1; i<num.length; i++){
//     if(num[i]>maxNum){
//         maxNum = num[i]
//     }
// }
// return maxNum;
// }
// let result = findNum(num);
// console.log(result); 

// Exercise 9 — Count vowels writing a function;

// let vowels = "Mariyam";
// function countVowel(vowels){
//         let vow = "";
//         for(let i =0; i<vowels.length; i++){
//             if(vowels[i]==="a,e,i,o,u"){
//                vow = vowels++; 
//             }
//         }
//  return vow;       
// }
// let result = countVowel(vowels);
// console.log(result); 

// Where my logic is wrong:
// 1= let vow = "";  This is wrong because it does not count anything as it is an empty since i want to count so it must be 0.
// 2= This condition if(vowels[i]==="a,e,i,o,u"); it is wrong because it compares all indivisual characters to the whole string "a,e,i,o,u" not every character.
// 3= This increament  vow = vowels++; is wrong because attempts to mathematically increment (++) the original input string variable vowels. This won't count anything and instead results in NaN .


// Correct code;

let vowels = "";
function countVowel(vowels){
        let vow = 0;
        let checkCount = "aiouAEIOU"

        for(let i = 0; i<vowels.length; i++){
             if(checkCount.includes(vowels[i])){
                vow++
             }
        }
 return vow;       
}
let result = countVowel("AdaniO");
console.log(`There are ${result} vowels.`);
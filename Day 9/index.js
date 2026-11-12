console.log("Today's learning topic is Arrrays.")

// What is an Array?
// Array is a variable that is used to store values of different kind of datatypes like we can store a number a string in a array.

let a = ["Mariyam", "Zia" , "Noor",1,4,6,7] 
console.log(a , typeof a) 

console.log(a.length)

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[4]);

// Strings are immutable while arrays are mutable, that means we can change the array's values.

a[1] = "Iqra"

console.log(a)

// Array methods:

// Change the array into sting

console.log(a.toString())

// Pop method, 
console.log(a.pop())
console.log(a)

// Join method ,

console.log(a.join(" or "))

// Push method,

a.push("Me")
console.log(a)

// Shift method,

console.log(a.shift());
console.log(a)

// Unshift method,

console.log(a.unshift(12))
console.log(a)

// Delete method,

delete a[3]
console.log(a)

// Concat method,

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3));

// Sort method,

let a4 = [2,4,1,5]
// console.log(a4.sort());

// Splice method,

console.log(a4.splice(0,3));
console.log(a4.splice(0,3,222,333));
console.log(a4);

// Slice method,

let numbers = [1,2,3,4,5,6];

console.log(numbers.slice(2));
console.log(numbers.slice(1,4));

// Reverse method,

// console.log(numbers.reverse());

// Loops in arrays,

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
    
// }
// For repeating the simple string or text;


// let z = "I Love You"
// for(let index = 0; index<11; index++){
//     console.log(z);
// }

// for(i = 0; i<11; i++){
//     console.log('I Love You');
// }
// let z = "I Love You"
// // console.log(z.repeat(10));

// console.log(Array(10).fill(z).join("\n"));

// let z = "I Love You";

// Array(10).fill(z).forEach(function(element) {
//     console.log(element);
// });

// function rmessage(message,times) {
//     for(i = 0; i<times; i++){
//         // console.log((i+1) + ": " + message);
//         console.log(`${i+1}: ${message}`);
//     }
// }
// rmessage('Hello World;', 3);
// let messages = ["Hello", "Hi", "Hey"];

// messages.forEach((messages, index) => {
//     console.log(` ${index}: ${messages}`);
// });
// let z = ["I Love You"];
// z.forEach((element, index)=> {
//     console.log(`Position ${index} contains: ${element}`);
// });

// const colo = ["Red","Blue","Black"];

// colo.forEach((element, i)=>{
//     console.log(`${i}: ${element}`);
// })
// const fruits = ["🍎", "🍌", "🍇"];
// for (const i of fruits) {
//     console.log(i);
// }

// Making a new array;

// let arr = [1,2,3,4,5];

// let newArr = [];

// for(let i = 0; i<arr.length; i++){
//     const element = arr[i];
//     newArr.push(element**2);
// }
// console.log(newArr);

// let arr1 = [1,2,3,4,5];

// let newArr1 = arr1.map(e=>{
//     return e**2;
// })
// console.log(newArr1);

// Traditional style writing function;

// function double(num){
//     return num*2;
// }
// console.log(double(2));

// Arrow function;

// const double = (num) =>{
//     return num **2;
// }
// console.log(double(2));

// Another way of arrow function;

// const double = num => num**2;
// console.log(double(2));

// Filter method;

// let L = [12,34,45,67,16];

// let newList = L.filter(L => L>12);
// console.log(newList);


// Reduce method;

let num = [1,2,3,4,5];

let num1 = num.reduce((q1 , q2) => {
    return q1 + q2;
})
console.log(num1);

let words = ["I","am","Mariyam."];

let sentence = words.reduce((a1,w1) =>{
    return a1+ " " +w1;
})

console.log(sentence);
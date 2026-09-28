// Write a simple for loop.

// let a = 1;

// for(i =0; i<15; i++){
//     console.log(a+ i)
// }

// const str1 = 'Mariyam';
// const str2 = 'Ali';

// // Combines both strings into one sequence
// for (const c of [...str1, ...str2]) {
//     console.log(c);
// }

// const prompt = require('prompt-sync')();
// let cart = [];
// let item = '';

// const prompt = require('prompt-sync')();

// // It will pause your VS Code terminal here until you type a name and press Enter
// const name = prompt("What is your name? "); 

// console.log(`Hello, ${name}! Your VS Code terminal setup is working.`);
// console.log(`Hello, ${name}! Your hfhfihfhf`)

// Shopping cart chanllange.

// Import and initialize the prompt-sync package
// const prompt = require('prompt-sync')();

// // 1. Create an empty array named cart
// let cart = [];
// let item = "";

// // 2. Use a while loop to repeatedly prompt the user
// while (item.toLowerCase() !== "done") {
    
//     item = prompt("Enter an item to add to your cart (or type 'done'): ");
    
//     // 3. If they type anything other than "done", add it to the cart array
//     if (item.toLowerCase() !== "done") {
//         cart.push(item);
//     }
// }

// // 4. Print out the header for the final list
// console.log("\n--- Your Final Shopping List ---");

// // 5. Use a clean for...of loop to print each item on a new line
// for (const foodItem of cart) {
//     console.log(foodItem);
// }


const prompt = require('prompt-sync')();
let attendanceList = [];
let studentName = '';

while (studentName.toLowerCase() !=='done') {
    studentName = prompt('What is your name?')

    if(studentName.toLowerCase() =='done'){
        break;
    }

    let status = prompt('Is this student Present (P) or Absent (A)?')
    let entry = `${studentName} - ${status.toUpperCase()}`

    attendanceList.push(entry)
}
console.log('--- Final Attendance Summary ---')
for (const c of attendanceList) {
     console.log(c)   
}

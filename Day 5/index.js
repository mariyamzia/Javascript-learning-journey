/*Today's excercise:
Create a faulty calculater using javacsript.
This faulty calculater will does the following things:
1. It takes the input from the user
2. It performs the following operations:

+ instead of -
- instead of +
* instead of /
/ instead of **

It perform wrong operation 10% of the time by generating a random number.

*/
const prompt = require('prompt-sync')();

let Firstnumber = Number(prompt('Enter the first number...'))
let Operator = prompt('Enter the operator ...(+ , - , * , /)')
let Secondnumber = Number(prompt('Enter the second number...'))

let a = Math.random();

if(a<0.7){
    // Faulty calculation
    if(Operator =='+'){
        console.log(Firstnumber - Secondnumber);
    }
    else if(Operator =='-'){
        console.log(Firstnumber + Secondnumber);
    }
    else if(Operator =='*'){
        console.log(Firstnumber / Secondnumber);
    }
    else if(Operator =='/'){
        console.log(Firstnumber ** Secondnumber);
    }
}
else{
    // Correct calculation
    if(Operator =='+'){
        console.log(Firstnumber + Secondnumber);
    }
    else if(Operator =='-'){
        console.log(Firstnumber - Secondnumber);
    }
    else if(Operator =='*'){
        console.log(Firstnumber * Secondnumber);
    }
    else if(Operator =='/'){
        console.log(Firstnumber / Secondnumber);
    }
}
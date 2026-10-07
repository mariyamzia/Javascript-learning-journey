console.log('Todays topic is Functions.')
// What is a function??
// A Javascript function is a block of code that is reusable and used to perform a specific task. If we want repitation in our code then we write a function for it so we can repeat the code and able to resue it.
// Declaration of a function: syntax


// function me(name) {
//     console.log("Hey " + name +" is a nice person")
//     console.log('Hey' + name +' is a good person')
//     console.log('Hey ' + name + ' is a programmer!')
//     console.log('Hey ' + name + ' is a web develpoer!')
// }

// me('Mariyam')
// me('Noor')


// function sum(a ,b, c = 1) {
//     // console.log(a+b)
//     console.log(a , b , c)
//     return a + b + c
// }
// result1 = sum(2)
// result2 = sum(3,4)
// result3 = sum(7,4 , 3)
// console.log('The sum of numbers is:', result1)
// console.log('The sum of numbers is:', result2)
// console.log('The sum of numbers is:', result3)


// Types of Functions:
// Function Declaration: It is a traditional way of define a function. Syntax: function name(parameters){....block of code}

// greet();
function greet(name1){
    console.log('Heloooo!!' + name1)
}
greet('Noor');


function add(a , b){
    // console.log(a + b)
    return a + b
}
result = add(2 ,4)
console.log(result)


// Function Expression: 
// A function can also be stored inside a variable. Syntax: const variableName = function(parameters){....block of code}

const greet1 = function(a , b){
    console.log(a + b)
}
greet1(1 , 3)

// Arrow Function:
// It is a shorter way to write a function: synatax: const variableName = (parameters) =>{....block of code}

const greet2 = () =>{
    console.log('Helooooo')
}
greet2();

// With parameters

const add2 = (a , b) =>{
    return a + b
}
me = add2(2,5)
console.log(me)


console.log('Hey this is Mariyam speaking')
// What is a variable?
// A varibale is a container or box that is used to store data values. We can put information, change it later, and retrieve it when needed.
// The 3 Ways to Declare a Variable:
// 1 let: The modern way to declare variables. You can change (reassign) the value later.
// 2 const: Short for "constant". Use this for values that should not change. If you try to reassign a const, JavaScript will throw an error.
// 3 var: The old way from before 2015. It is generally avoided today because it has quirky behavior (called function-scoping) that can cause bugs.
// Naming rules for variables:
// 1 Case sensitive mean myscore and myScore are completly different.
// 2 Allowed Characters: Names can only contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
// 3 First Character Restriction: A name cannot begin with a digit. It must start with a letter, an underscore, or a dollar sign.
// 4 No Reserved Keywords: You cannot use words that JavaScript already uses for its own logic (e.g., let, const, var, if, for, function).

let $ = 3;
let b = 4;
let c = 'Mariyam';
let d = 'Noor'
// Print the values of variable
console.log($ + b + 3 )
// Print the type of variables
console.log(typeof $, typeof b, typeof c, typeof d)
{
    let c = 44
    console.log(c)
}
// console.log(c)

// const _a1 = 4;
// _a1 = _a1 + 1;
// 1 Primitive Data Types and Objects in Javascript:
// Primitive Data Types:
// Primitives are the most basic building blocks of the data in Javascript. They hold a simple single value.
// 7 types of Primitives data types:
// 1: String: Textual data wrapped in quotes (e.g., "Hello", 'JS').
// 2: Number: All numbers, including integers and decimals (e.g., 42, 3.14).
// 3: BigInt: For numbers larger than the standard Number limit can safely handle (e.g., 9007199254740991n).
// 4: Boolean: True or false values (true or false).
// 5: Undefined: A variable that has been declared but has not yet been assigned a value automatically gets the value undefined.
// 6: Null: An intentional absence of any value. It represents "nothing" or "empty".
// 7: Symbol: A unique and unchangeable identifier used for advanced object properties.
// 2. Objects:
// An object is a complex data type that allows you to store collections of data and more complex entities. Instead of holding just one value, an object holds data in key-value pairs (properties).

let x = 'Mariyamz';
let y = 12;
let z = 0.127745746836483737647476483483483483749389183018392;
let p = null;
let q = undefined;
let s = true;

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof s)

let t = {
      'name' : 'Noor',
      'Job Code' : '4566',
      'is_smart': true
}
console.log(t)
t.salary = '12k'
console.log(t)
t.salary = '20k'
console.log(t)
console.log('Hello this is second day of learning Javascript.')
// If-else statement in javascript
let age2 = 17;
let ag = 2;

if((age2/age2)>30){
    console.log('You are old');
}
else{
    console.log('You are young');
}
// Operators in javascript:
// 1 Arithmatic operators:

a = 4;
b = 5;
c = a + b
console.log(c)

e = 4;
f = 3;
s = e/f;
console.log(s)

// Assignment operators:
// 1- =, 2- +=, 3- -=, 4- *=, 5- /=, 6- %=, 7- **=

d = 66;
console.log(d)

w = 12;
q = 1;
// This operator update the variable
w = w+=q;
console.log(w)

w = 12;
q = 1;
w = w-=q;
console.log(w)
w = 12;
q = 1;
w = w*=q;
console.log(w)
w = 12;
q = 1;
w = w/=q;
console.log(w)
w = 12;
q = 144;
w = w%=q;
console.log(w)
w = 12;
q = 13;
w = w**=q;
console.log(w)

// Comparizon operators:

let age1 = 18;

if(age1===18){
    console.log('You can smoke')
}
else{
    console.log('You cannot smoke!')
}

// Repel stands for (Read Evaluate Print Loop)

// Ternary operator:

// Syntax:

// condition ? conditionifTrue: conditionifFalse;

let age = 20; 

let score = age >=18 ? "Adult" : 'Minor'
console.log(score)


// Conditions:
// If condition

let marks = 50;
if(marks>45){
    console.log('You passed!')
}

// if_else condition

let marks1 = 30;
if(marks1>45){
    console.log('You passed!')
}
else{
    console.log('You failed.')
}

// if_else_if condition (if_else ladder)

let marks2 = 49;
if(marks2>=90){
    console.log('Grade A+')
}
else if(marks2>=70){
    console.log('Grade B+')
}
else if(marks2>=50){
    console.log('Grade C')
}
else{
    console.log('Fail')
}
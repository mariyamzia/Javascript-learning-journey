console.log("Let's gooo!!");

// Changing the title of the page;
console.log(document.title = "DOM Learning");

console.log(document.body);

// Selecting and printing the HTMl elements;

let get = document.getElementById("container");
console.log(get);
let got = document.getElementsByClassName("description");
console.log(got)
console.log(document.getElementsByClassName("description"));

console.log(document.getElementById("topic"));

 console.log(document.getElementsByTagName("h1"));
 console.log(document.getElementsByTagName("div"));
 console.log(document.getElementsByTagName("ul"));
 console.log(document.getElementsByTagName("li"));

 console.log(document.querySelector("#container"));
 console.log(document.querySelector("#heading"));
 console.log(document.querySelector("#topic"));
 console.log(document.querySelector(".description"));


//  Printing all elements;
 console.log(document.querySelectorAll("*"));

 console.log(document.all);

document.querySelectorAll(" body *").forEach(e =>{
            console.log(e);
 })

 Array.from(document.body.children).forEach(e =>{
     console.log(e);
 })
 document.querySelectorAll("body > *").forEach(e =>{
        console.log(e);
 })

 console.log(document.body.childNodes[3]);

 console.log(document.getElementById("topic"));
 console.log(document.getElementById("topic").parentNode);
 console.log(document.getElementById("topic").firstChild);
 console.log(document.getElementById("topic").firstElementChild);
 console.log(document.getElementById("topic").lastChild);
 console.log(document.getElementById("topic").children);
 console.log(document.getElementById("topic").childNodes);
 console.log(document.getElementById("topic").parentElement);

 console.log(document.getElementById("heading"));
 console.log(document.getElementById("heading").parentElement);

 console.log(document.getElementById("container"));
 console.log(document.getElementById("container").parentElement);

 console.log(document.getElementById("topic"));
 console.log(document.getElementById("topic").lastElementChild.previousElementSibling);

 console.log(document.getElementById("topic").children) 
 console.log(document.getElementById("topic").children[1].nextElementSibling);
 console.log(document.getElementById("topic").children[1].previousElementSibling);

// Changing the text
console.log(document.getElementById("heading").textContent = "My Learning");
console.log(document.querySelector(".description").textContent = "I am learning DOM");


// Creating the new list;
let list = document.getElementById("topic");
let newItem = document.createElement("li");
newItem.textContent = "Python"
list.appendChild(newItem);
console.log(document.getElementById("topic").children);


// Creating the new paragraph;
let lst = document.querySelector("#container");
let newlst = document.createElement("p");
newlst.textContent = "Hey! I am 2nd paragraph"
lst.appendChild(newlst);

console.log(document.getElementById("topic").children[1].remove());

console.log(container.children); 


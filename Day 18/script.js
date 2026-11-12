//  Excercise one= Create a new element and insert it

 let insert = document.querySelector("#container");
  let p = document.createElement("p");
  p.innerHTML = "I am learning DOM manipulation"
  insert.append(p);
//   Excercise 2 = Create new li and insert it in ul;
// insert at the end of the list items;

    let ul = document.getElementById("topics");
    let newLi = document.createElement("li");
    newLi.textContent = "Python"
    // Because "new" is a reserve word in a javascript;
    ul.append(newLi);
// Excercise 3 = Insert at the beginning;
// insert at the beginning of the list items;

let newUl1 = document.getElementById("topics");
let li1 = document.createElement("li");
li1.textContent = "Computer Science"
newUl1.prepend(li1);
// insert between the list items;

let newUl = document.getElementById("topics");
let li = document.createElement("li");
li.textContent = "Math"
let second = newUl.children[1];
second.before(li)

// Remove the list item;

let bn = document.getElementById("topics");
let s = bn.lastElementChild;
s.remove();


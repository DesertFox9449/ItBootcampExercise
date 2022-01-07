// console.log(document);
// console.dir(document);
// console.log(document.URL);
// console.log(document.anchors);
// console.dir(document.body);
// console.dir(document.body.childNodes[2]);
// console.log(document.body.parentNode);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = `njanja najanaja`;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.dir(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// document.all[10].textContent = `Hello There Madafaka`;
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.images[0]);

// // GET ELEMENT BY ID //
// console.log(document.getElementById(`prvi`));
// let forma = document.getElementById(`prvi`);
// console.log(forma);
// forma.textContent = `I dubble dare you MADAFAKA`; // ako idemo na display: none i dalje se vidi u konzoli
// forma.innerText = `I don't dubble dare you Madafaka`; // ako idemo na display: none ne vidi se u konzoli

// //
// forma.innerHTML = `<h3>Hello there nigga!</h3>`;
// forma.style.borderBottom = `2px solid red`;
// let head = document.getElementById(`mainHeader`);
// head.style.borderBottom = `5px solid gray`;

// GET ELEMENTS BY CLASS NAME //

// let items = document.getElementsByClassName(`container`);
// console.log(items);
// console.log(items[0]);
// items[1].textContent = `Hello again Man`;
// items[1].style.fontSize = `3em`;
// items[1].style.backgroundColor = `pink`;
// items[1].style.fontWeight = `bold`;

// // afect all of them
// // items.style.backgroundColor = `gray`;

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = `gray`;
// }

// // GET ELEMENTS BY TAG NAME //

// let p = document.getElementsByTagName(`p`);
// console.log(p);
// console.log(p[1]);
// p[1].style.color = `red`;
// p[1].style.backgroundColor = `gray`;
// p[1].style.fontWeight = `bolder`;
// p[1].style.fontSize = `1.5em`;

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = `yellow`;
// }

// // Query Selector //

// let p1 = document.querySelector(`p.container`);
// console.log(p1);
// p1.style.borderLeft = `10px solid pink`;

// let input = document.querySelector(`input`);
// // input.value = `This is my first input changed by JS.`;
// input.placeholder = `Suck my di*k!`;

// let submit = document.querySelector(`input[type = "submit"]`);
// submit.value = `Choke on IT!`;

// Traversing DOM //
let itemList = document.querySelector(`#items`);
// console.log(itemList);
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = `green`;
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = `pink`;

// parent Element //

// console.log(itemList.parentElement);

// parentElement i parentNode se mogu koristiti naizmenicno

// childNodes //
// console.log(itemList.childNodes);
// prazan prostor izmedju tagova se upisuje kao text i dodaje se na listu

// itemList.childNodes.forEach((element, index) => {
//     if(index % 2 != 0) {
//         console.log(element);
//     }
// });

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = `orange`;
// itemList.children[1].style.listStyleType = `none`;
// itemList.children[1].style.margin = `0`;
// itemList.children[1].style.padding = `0`;
// itemList.children[1].style.textAlign = `center`;

// // FirstChild //
// console.log(itemList.firstChild);

// // FirstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = `Bolje jedan nego dva!!!`;

// // lastChild daje prazan prostor === text
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = `Ja sam prvi od pozadi!!!`;

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent += ` yeah baby`;


// Creating elements in JS //

// createElement

// Create a div
let newDiv = document.createElement(`div`);

//add class
newDiv.className = `goHome`;

//add id
newDiv.id = `joSta`;

// add attr
newDiv.setAttribute(`name`, `mojDiv`);

// create a text node
textDiv = document.createTextNode(`To ti je moj text node, bratko!`);

// add text to div
newDiv.appendChild(textDiv);

// add div to DOM
let lista = document.querySelector(`div ul#items`);
console.log(lista);
let item = document.querySelector(`div ul#items li:nth-child(3)`);

console.log(item);

lista.insertBefore(newDiv, item)

console.log(newDiv);


let newD = document.createElement(`div`);
let newH2 = document.createElement(`h2`);
let newP = document.createElement(`p`);
// console.log(newD, newH2, newP);

let newTitle = document.createTextNode(`Special title`);
let newPara = document.createTextNode(`This is an amazing text, trust me brother.`);

newH2.appendChild(newTitle);
console.log(newH2);

newP.appendChild(newPara);
console.log(newP);
newD.appendChild(newH2);
newD.appendChild(newP);
console.log(newD);

///////////////////////////////////
// lokacija za transfer
let con = document.querySelector(`div.container`);
console.log(con);
// tag pre koga se stavlja novi item
let linkA = document.querySelectorAll(`div.container a`);
console.log(linkA);
linkA = linkA[0];
// prebacujemo vrednost promenjive na prvi link
console.log(linkA);

// con.appendChild(newD);

// paragraf dekoracija
newP.style.fontSize = `2em`;
newP.style.color = `lime`;
newP.style.textDecoration = `underline`;

// naslov dekoracija

newH2.style.fontSize = `2.5em`;
newH2.style.color = `red`;
newH2.style.fontStyle = `italic`;

// div dekoracija
newD.style.backgroundColor = `#999`;

con.insertBefore(newD, linkA);











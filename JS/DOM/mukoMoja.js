let book1 = {
    title: `Never Let Me Go`,
    author: `Kazuo Ishiguro`,
    picture: `https://upload.wikimedia.org/wikipedia/en/2/25/Never_Let_Me_Go.jpg`,
    read: true,
};

let book2 = {
    title: `Sapiens: A Brief History of Humankind`,
    author: `Yuval Noah Harari`,
    picture: `https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg`,
    read: false,
};

let book3 = {
    title: `The Mist`,
    author: `Stephen King`,
    picture: `https://upload.wikimedia.org/wikipedia/en/a/ae/Mist2007.jpg`,
    read: true,
};

let book4 = {
    title: `Black Rednecks and White Liberals`,
    author: `Thomas Sowell`,
    picture: `https://booklife.com/image-factory/http/localhost/amazongetcover/9781594030864.jpg/w204.jpg`,
    read: false,
};

let bookArray = [book1, book2, book3, book4];

// vrednost URL   1
let imgURL1 = book4.picture; 

// tag za slike    2
let myImg1 = document.createElement(`img`);
console.log(myImg1);
// postavi atribut  3
myImg1.setAttribute(`src`, `${imgURL1}`);
console.log(myImg1.src);
// document.body.appendChild(myImg1);
// parent element
let tabela = document.querySelector(`.ojsa`); //nije potreban
// element pre koga ide slika  4
let gde = document.querySelector(`.ojsa tr:nth-child(3) td:first-child`);
console.log(gde);
// postavi sliku
gde.appendChild(myImg1);

// druga kolona

let naziv = book1.title;
naziv = document.createTextNode(`${book1.title}`)
console.log(naziv);

let autor = book1.author;
autor = document.createTextNode(`${book1.author}`);
console.log(autor);

let p1 = document.createElement(`p`);
p1.appendChild(naziv);
console.log(p1);

let p2 = document.createElement(`p`);
p2.appendChild(autor);
console.log(p2);

let gde2 = document.querySelector(`.ojsa tr:nth-child(3) td:last-child`);
gde2.appendChild(p1);
gde2.appendChild(p2);




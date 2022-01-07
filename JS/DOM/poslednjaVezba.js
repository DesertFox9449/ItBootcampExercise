// Dodati novi div tag dokumentu.
let newDiv = document.createElement(`div`);
console.log(newDiv);
document.body.appendChild(newDiv);

// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

// niz
let names = [`Pera`, `Zika`, `Mika`, `Joka`, `Soka`, `Roka` ];

function lista(array) {
    let ul = `<ul>`;
    array.forEach(ime => {
        ul += `<li>${ime}</li>`;

    });
    ul += `</ul>`;
    document.innerHTML += ul;
    console.log(ul);
    return ul;
}
// let list = lista(names);
// console.log(typeof list);

let list = document.createRange().createContextualFragment(lista(names));

console.log(typeof list);
newDiv.appendChild(list);

let childOut = document.querySelector(`div ul li:first-child`);
console.log(childOut.textContent);

let parentUl= document.querySelector(`div ul`);
console.log(parentUl);

parentUl.removeChild(childOut);
console.log(parentUl.childNodes);

// U ul listi zameniti drugu stavku liste.
// old child to be replaced
let childReplace = document.querySelector(`div ul li:nth-child(2)`);
// new child to be used as a replacement
let newChild = document.createElement(`li`);
let textLi = document.createTextNode(`Sojka na Jugovinu`);
newChild.appendChild(textLi);
console.log(newChild.textContent);

parentUl.replaceChild(newChild, childReplace);

// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let slika = document.createElement(`img`);
slika.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnYcDBnvYQd3p7mBqHPColzGvTrsqNwhiOg&usqp=CAU`;
console.log(slika.src);

// pre ovog
let preChild = document.querySelector(`div ul li:nth-child(4)`);
console.log(preChild.textContent);

parentUl.insertBefore(slika, preChild);

// parentUl.appendChild(slika);





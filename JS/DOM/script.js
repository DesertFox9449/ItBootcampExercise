// console.log(document);
// console.log(typeof document);
// console.log(document.body);
// console.log(typeof document.body);

// document.URL
// console.log(document.URL);
// document.documentElement;
// console.log(document.documentElement);
// document.forms;
// console.log(document.forms);
// document.images;
// console.log(document.images);
// console.log(typeof document.images);

// document.links;
// console.log(document.links);

// let a = document.getElementById(`prvi`);
// console.log(a);

// let b = document.getElementsByClassName(`hola`);
// console.log(b);

// let c = document.getElementsByTagName(`img`);
// console.log(c);

// c = Array.from(c)

// c.forEach(element => {
//     console.log(element);
// });

// let h = document.getElementsByName(`pera`);


// h.forEach(ele => {
//     console.log(h);
// });

// let x = document.getElementsByClassName(`container`);
// console.log(x);

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }

// x = Array.from(x);
// x.forEach(e => {
//     console.log(e);
// });
// console.log(x);

// let p = document.getElementsByTagName(`p`);
// console.log(p);
// p = Array.from(p);
// console.log(p);
// p.forEach(e => {
//     console.log(e);
// });

// let linkovi = document.getElementsByName(`link`);
// console.log(linkovi);

// let p1 = document.querySelector(`#p1`);
// console.log(p1);
// console.log(typeof p1);
// p1 = Array.from(p1);
// console.log(typeof p1);
// p1.forEach(e => {
//     console.log(e);
// });

// let y1 = document.querySelectorAll(`div.container`);
// console.log(y1);

let a = document.getElementById(`p1`);
console.log(a);
a = document.querySelector(`p`);
console.log(a);

let b = document.querySelector('div.error');
console.log(b);

b = document.getElementsByClassName('error');
console.log(b[0]);

let c = document.querySelector(`table tr:last-child`);
console.log(c);
c = document.querySelector(`table tr:last-child td:last-child`);
console.log(c);

// ugradjena komanda
let d = document.links;
console.log(d);
d = Array.from(d);
d.forEach(e => {
    console.log(e);
});

// queryAll CSS selektor 
d = document.querySelectorAll(`a`);
console.log(d);
d.forEach(e => {
    console.log(e);
});

// tag
d = document.getElementsByTagName(`a`);
console.log(d);
d = Array.from(d);
d.forEach(e => {
    console.log(e);
});

// slike

// html
let e = document.getElementsByTagName(`img`);
console.log(e);
e = Array.from(e);
e.forEach(el => {
    console.log(el);
});

// query selektori
e = document.querySelectorAll(`img`);
console.log(e);
e.forEach(el => {
    console.log(el);
});

// query selektori 2
e = document.querySelectorAll(`[src]`);
console.log(e);
e.forEach((el, index) => {
    if (index < 2) {
        console.log(el);
    }
});

f = document.querySelectorAll(`*`);
console.log(f);
f.forEach(el => {
    console.log(el);
});

let links = document.getElementsByTagName(`a`);
console.log(links);
links = Array.from(links);
console.log(links);
links.forEach(el => {
    el.innerHTML += `Moj link`;

    el.herf = "https://www.google.com";
    el.target = `_blank`;

    el.style.backgroundColor = `#fff`;
    el.style.textDecoration = `none`;
    el.style.color = `red`;
    el.style.fontSize = `2em`;
    el.style.display = `block`;

    el.setAttribute(`name`, `pera`);
    // el.setAttribute(`style`, `color:pink`);
    

});

// Selektovati sve paragrafe i svakom pridodati tekst `Vazno!!!`.
let para = document.getElementsByTagName(`p`);
console.log(para);
para = Array.from(para);
console.log(para);
para.forEach(el => {
    el.innerHTML += `Vazno!!!`;
});

// Svim divovima na stranici sa klasom "error" dodati po jedan naslov najvece velicine sa tekstom `Greska!`.
let divovi = document.querySelectorAll(`div.error`);
console.log(divovi);
divovi.forEach(el => {
    el.innerHTML += `<h1>Greska</h1>`;
});

// Neka je n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i na drugom za svako i = 1,2,..., n.
let i = 1;
para.forEach(el => {
    el.innerHTML += `${i**2}`;
    i++;
});

// Svim slikama dodati alternativni tekst.
let imgAll = document.querySelectorAll(`img`);
console.log(imgAll);
imgAll.forEach(el => {
    el.alt = `Ko je to tamo?`;
});

// Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom.
let para1 = document.getElementsByTagName(`p`);
console.log(para1);
para1 = Array.from(para1);
para1.forEach((el, index) => {
    el.setAttribute(`style`, `color:yellow`);
    if (index % 2 != 0) {
        el.setAttribute(`style`, `background-color: green`);
    }
    else {
        el.style.backgroundColor = `red`;
    }
});

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.

// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.


let linkovi1 = document.getElementsByTagName(`a`);
console.log(linkovi1);
linkovi1 = Array.from(linkovi1);
linkovi1.forEach((el, index) => {
    el.style.padding = `5px`;
    el.style.fontSize = `28px`;
    el.style.textDecoration = `none`;
    el.style.color = `red`;
    if (index % 2 != 0) {
        el.style.backgroundColor = `green`;
        el.style.color = `pink`;
    }
    else {
        el.style.backgroundColor = `blue`;
        el.style.color = `white`;
    }
});

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 

let slikice = document.querySelectorAll(`img`);
console.log(slikice);
// slikice.forEach((el) => {
//     el = Array.from(el);
//     console.log(el);
//     for(let i = 0; i < el.length; i++) {
        
//         if (e[e.length - 4] == `.` && e[el.length-3] == `p` && e[e.length-2] == 'n' && e[e.length - 1] == `g`) {
//             e.setAttribute(`style`, `border: 2px solid red`);
//         }
//     }
        
    
// });
// slikice.forEach(el => {
//     el = Array.from(el);
//      if (el.includes(`.png`)) {
//         el.setAttribute(`style`, `border: 2px solid red`);
//         el.style.border = `2px solid red`;
//         console.log(`1`);
//     }
// });

slikice.forEach(el => {
    
     if (el.src.includes(".png")) {
        el.setAttribute(`style`, `border: 2px solid red`);
        el.style.border = `2px solid red`;
        console.log(`1`);
    }
});

// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 

let aLinks = document.links;
console.log(aLinks);
aLinks = Array.from(aLinks);
aLinks.forEach(link => {
    if (link.target == `_blank`) {
        link.target = `_top`;
    }
    else {
        link.target = `_blank`;
    }
});

// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
let imena = [`Pera`, `Zika`, `Mika`, `Sika`];

// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.

imena.forEach(ime => {
    if (ime.startsWith(`S`)) {
        // ime.target = `_blank`;
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
let ul = `<ul>`;
imena.forEach((ime, index) => {
    if (index % 2 == 0) {
        ul += `<li style="color: red;">${ime}</li>`;
    }
    else {
        ul += `<li style="color: blue;">${ime}</li>`;
    }
});
ul += `</ul>`;
document.body.innerHTML += ul;

// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

let tabelaZadatak = `<table>`; // u jednoj koloni?
for (let i = 0; i < imena.length; i++) {
    tabelaZadatak += `<tr><td style="padding: 20px; border: 4px solid black; margin:10px">${imena[i]}</td></tr>`
}
tabelaZadatak += `</table>`
document.body.innerHTML += tabelaZadatak;

let testdiv = document.querySelector(".test");

// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let para2 = document.getElementsByTagName(`p`);
para2 = Array.from(para2);
para2.forEach((p, index) => {
    if (index % 2 != 0) {
        p.classList.add(`error`);
        console.log(p);
    }
    else {
        p.classList.add(`success`)
        console.log(p);
    }
});

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.

para2.forEach((p, index) => {
    if(index % 3 == 2) {
        p.style.fontSize = `15px`;
    }
    else if (index % 3 == 1) {
        p.style.fontSize = `20px`;
    }
    else {
        p.style.fontSize = `25px`;
    }
});

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.

para2.forEach(p => {
    if (p.textContent.includes(`success`)) {
        p.classList.add(`success`);
        
    }
    if (p.textContent.includes(`error`)) {
        p.classList.add(`error`);
        
    }
});

// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
console.log(`Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.`);
para2.forEach(p => {
    p.classList.toggle(`error`);
    console.log(p);
});



let newDiv = document.createElement(`div`);

newContent = document.createTextNode(`Hello there madafaka!`);

newDiv.appendChild(newContent);

///////////////////////////
let div = document.querySelector(`div`);
console.log(div);

document.body.insertBefore(newDiv, div);

/////////////////////////////
// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

let niz = [`jabuka`, `sljiva`, `dunja`, `tresnja`, `kajsija`];

let newUl = `<ul id="lista">`;
niz.forEach(vocka => {
    newUl += `<li>${vocka}</li>`;
});
newUl += `</ul>`;

document.body.innerHTML += newUl;
///////////////////////////////////////
// Iz ul liste izbaciti prvu stavku.
let liste = document.getElementById(`lista`);
console.log(typeof liste);
liste = Array.from(liste);
console.log(liste);


console.log(document);
console.dir(document);
console.log(document.URL);
console.log(document.anchors);
console.dir(document.body);
console.dir(document.body.childNodes[2]);
console.log(document.body.parentNode);













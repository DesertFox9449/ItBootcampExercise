/* Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
- Naziv knige,
- Autora knjige,
- Putanja do sličice,
- Polje – indikator da li je knjiga pročitana ili ne.
*/
let book1 = {
    title: `Never Let Me Go`,
    author: `Kazuo Ishiguro`,
    picture: `https://upload.wikimedia.org/wikipedia/en/2/25/Never_Let_Me_Go.jpg`,
    read: true,
};

let book2 = {
    title: `Sapiens`,
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

// Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.

function tabela(array) {
    let t = `<table>
            <tr>
                <th>Books</th>
                <th>Authors/Titles</th>
            </tr> 
            `;
    for (let i = 0; i < array.length; i++) {
        t += `<tr>
                <td></td>
                <td></td>
              </tr>
              `;
    }
    t += `</table>`;
    
    // pretvaranje stringa u DOM nodes
    t = document.createRange().createContextualFragment(t);
    return t;

}


let tab = tabela(bookArray);
console.log(tab.children);

document.body.appendChild(tab);

// stilizovanje
let myTable = document.querySelector(`table`);
console.log(myTable);
myTable.style.border = `2px solid black`;
myTable.style.borderCollapse = `collapse`;


let td = document.querySelectorAll(`td`);
td.forEach(el => {
    el.style.border = `1px solid black`;
});

let th = document.querySelectorAll(`th`);
th.forEach(header => {
    header.style.border = `1px solid black`;
    header.style.backgroundColor = `#555`;
    header.style.color = `white`;
    header.style.fontSize = `1.6em`;
});

// console.log(td);

///////////////////////////////////////

// U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.


function mukoMojaPredjiNaDrugoga(knjige) {
    
    knjige.forEach((book, index) => {
        // iterator  
        // index = 0, prvi tr je th
        // pocetni index = 0
        // zato iterator mora da pocne od 2
        // reset

        let i = 2; 
        i += index;

        // console.log(`Ovo je i ${i}`);
        // console.log(`Ovo je index ${index}`);
        
        // promenljive za slike, Col1
        let imgURL = ``;
        let imgTag = document.createElement(`img`);
        let col1Location = ``;

        // vrednost promenljivih
        imgURL = book.picture;
        imgTag.setAttribute(`src`, imgURL);
        // stilizovanje slika
        imgTag.style.width = `250px`;
        imgTag.style.height = `350px`;
        // menjanje lokacije
        col1Location = document.querySelector(`table tr:nth-child(${i}) td:first-child`);
        col1Location.appendChild(imgTag);
        
        console.log(imgURL);
        console.log(imgTag);
        console.log(col1Location);

        // promenljive za tekst, naziv, autor, Col2
        // stvaranje tekstualne vrednosti
        let naziv = document.createTextNode(`${book.title}`);
        // stvaranje tekstualne vrednosti
        let autor = document.createTextNode(`${book.author}`);

        // p1 - naslov knjige
        // stvaranje <p> elementa
        let p1 = document.createElement(`p`);
        // dodeljivanje tekstualne vrednosti <p> tagu
        p1.appendChild(naziv);
        // stilizovanje
        p1.style.textAlign = `center`;
        p1.style.fontWeight = `bold`;
        p1.style.fontSize = `1.2em`;

        // p2 - ime autora
        let p2 = document.createElement(`p`);
        // dodeljivanje tekstualne vrednosti <p> tagu
        p2.appendChild(autor);
        // stilizovanje
        p2.style.textAlign = `center`;
        p2.style.fontWeight = `bold`;
        p2.style.fontSize = `1.7em`;

        // menjanje lokacije
        let col2Location = document.querySelector(`table tr:nth-child(${i}) td:last-child`);
        // stilizovanje Col2
        col2Location.style.backgroundColor = `#ddd`;

        // dodavanje elemenata u DOM
        col2Location.appendChild(p1);
        col2Location.appendChild(p2);

        // Ukoliko je knjiga pročitana, boja teksta treba da bude plava, a ako nije, boja teksta treba da bude siva.

        // uslov za tekst
        if (book.read == true) {
            p1.style.color = `blue`;
            p2.style.color = `blue`;
        }
        else {
            p1.style.color = `gray`;
            p2.style.color = `gray`;
        }

        // Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.
        // redovi naizmenicno obojeni
        
        if (index % 2 == 0) {
            col1Location.style.backgroundColor = `pink`;
            col2Location.style.backgroundColor = `pink`;
        }
        else {
            col1Location.style.backgroundColor = `yellow`;
            col2Location.style.backgroundColor = `yellow`;    
        }

    });
}

mukoMojaPredjiNaDrugoga(bookArray);








// let cars = [`Jugo`, `Toyota`, `Volvo`, `Maserati`, //1
// [`Audi`, `BMW`, `Volkswagen`, //2
// [`Renault`, `Dacia`, `Fiat`], //3
//  `Mercedes`], //2
//  `Hundai`]; //1
// console.log(cars);
// console.log(cars[4]);
// console.log(cars[4] [0]);
// console.log(cars[4] [2]);
// console.log(cars[4][3][2]);

// cars[0] = `Fica`;
// console.log(cars[cars.length - 1]);

// cars.forEach((element, index) => {
//     console.log(element, index);
// });
// cars[0] = undefined;
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
//     if (cars[i].length > 1) {
//         for(let i = 0; i < cars[i][i].length; i++) {
//             console.log(cars[i]);
//         }
//     }
// }

// console.log(cars[4].length);

// let numbers = [1, 2, 34, 4, 8, 12, [9, 10, 11]];

// for (let i = 1; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i][i] == true) {
//         for (let i = 1; i < numbers.length; i++) {
//             console.log(numbers[i]);
//         }
//     }
// }

// console.log(JSON.stringify(numbers));

/////////////////////////////////////////////////////////////////////////////

// 1. Zadatak
// Ispisati sve elemente niza od 5 stringova.

let niz1 = [1, 2, 3, 4, 5];

for (let i = 0; i < niz1.length; i++) {
    console.log(niz1[i]);
}

// 2. Zadatak
// Odrediti zbir elemenata celobrojnog niza.
// let niz1 = [1, 2, 3, 4, 5];
let zbir = 0;
for (let i = 0; i < niz1.length; i++) {
    zbir += niz1[i];
}
console.log(zbir);

// 3. Zadatak
// Odrediti proizvod elemenata celobrojnog niza.
// let niz1 = [1, 2, 3, 4, 5];
let proizvod = 1;
for (let i = 0; i < niz1.length; i++) {
    proizvod *= niz1[i];
}
console.log(proizvod);

// 4. Zadatak
// Odrediti srednju vrednost elemenata celobrojnog niza.
// let niz1 = [1, 2, 3, 4, 5];
let srednjaVrednost = niz => {
    let srVrednost = 0;
    let suma = 0;
    for (let i = 0; i < niz1.length; i++) {
        suma += niz1[i];
    }
    srVrednost = suma / niz1.length;
    return srVrednost;
}


// 5. Zadatak
// Odrediti maksimalnu vrednost u celobrojnom nizu.

// Prvi nacin
// let max = Number.MIN_VALUE;
// for (let i = 0; i < niz1.length; i++) {
//     if (max < niz1[i]) {
//         max = niz1[i];
//     }
// }
// console.log(max);

// Drugi nacin
let maxVrednost = niz => {
    let max = niz1[0];
    for (let i = 1; i < niz1.length; i++) {
        if (max < niz1[i]) {
            max = niz1[i];
        }
    }
    console.log(max);
    return max;
}


// 6. Zadatak
// Odrediti minimalnu vrednost u celobrojnom nizu.

// Prvi nacin
// let min = Number.MAX_SAFE_INTEGER;
// console.log(min);
// for (let i = 0; i < niz1.length; i++) {
//     if (min > niz1[i]) {
//         min = niz1[i];
//     }
// }
// console.log(min);

// Drugi nacin

let minVrednost = niz => {
    let min = niz1[0];
    for (let i = 1; i < niz1.length; i++) {
    if (min > niz1[i]) {
        min = niz[i];
    }
    }
    console.log(min);
    return min;
}


// 7. Zadatak
// Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxIndex = (niz, max) => {
    let index = ``;
    for (let i = 0; i < niz.length; i++) {
        if (max === niz[i]) {
            index = i;
        }
    }
    console.log(index);
};
 
// let niz1 = [1, 2, 3, 4, 5];
maxIndex(niz1, maxVrednost());

// 8. Zadatak
// Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndex = (niz, min) => {
    let index;
    for (let i = 0; i < niz.length; i++) {
        if (min === niz[i]) {
            index = i;
        }
    }
    console.log(index);
};

minIndex(niz1, minVrednost());

// 9. Zadatak
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// let niz1 = [1, 2, 3, 4, 5];

let brEleSredVred = (niz, artSred) => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (artSred < niz[i]) {
            brojac++;
        }
    }
    console.log(brojac);
};

brEleSredVred(niz1, srednjaVrednost());

// 10. Zadatak
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let pozElementi = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] >= 0) {
            suma += niz[i];
        }
    }
    console.log(suma);
};
pozElementi(niz1);

// 11. Zadatak
// Odrediti broj parnih elemenata u celobrojnom nizu.

let parElementi = niz => {
    let broj = ``;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            broj++;
        }
    }
    console.log(broj);
};

parElementi(niz1);
// let niz1 = [1, 2, 3, 4, 5];
// index niza  0  1  2  3  4

// 12. Zadatak
//  Odrediti broj parnih elemenata sa neparnim indeksom.

let parEleNepIndex = niz => {
    let broj = ``;
    for (let i = 0; i < niz.length; i++) {
        if ((niz[i] % 2 == 0) && (i % 2 == 1)) {
            broj++;
        }
    }
    console.log(broj);
};
parEleNepIndex(niz1);

// 13. Zadatak
// Izračunati sumu elemenata niza sa parnim indeksom.

let sumaParIndex = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    console.log(suma);
};
sumaParIndex(niz1);

// let niz1 = [1, 2, 3, 4, 5];
// index niza  0  1  2  3  4

// 14. Zadatak
// Promeniti znak svakom elementu celobrojnog niza.

let promeniZnak = niz => {
    let holder = ``;
    let niz2 = [];
    for (let i = 0; i < niz.length; i++) {
        holder += niz[i] * (-1) + ` `;
        niz2.push(niz[i] * (-1))
    }
    console.log(holder);
};
promeniZnak(niz1);

// Drugi nacin uvodjenjem novog niza

// 14. Zadatak
// Promeniti znak svakom elementu celobrojnog niza.

let promeniZnak1 = niz => {
    
    let niz2 = [];
    for (let i = 0; i < niz.length; i++) {
       
        niz2.push(niz[i] * (-1))
    }
    console.log(niz2);
};
promeniZnak1(niz1);

// 15. Zadatak
//  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promeniZnak2 = niz => {
    let niz2 = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz2.push(niz[i] * (-1));
        }
        else {
            niz2.push(niz[i]);
        }
    }
    console.log(niz2);
};
promeniZnak2(niz1);

// 16. Zadatak
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let stavke = [`voce`, `povrce`, `meso`, `mleko`, `jogurt`, `hleb`];

let zaKupovinu = niz => {
    let ul = `<ul>`;
    for (let i = 0; i < niz.length; i++) {
        ul += `<li>${niz[i]}</li>`;
    }
    ul += `</ul>`;
    document.body.innerHTML += ul;
};

zaKupovinu(stavke);

// 17. Zadatak
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let nasi = [`Teo`, `Bogdan`, `Jokara`, `Kalina`, `Radulja`, `Beli`, `Bobi`];

let tim = niz => {
    let ime = `
        <table>
            <tr>
                <th>Tim</th>
            </tr>
    `;
    for (let i = 0; i < niz.length; i++) {
        ime += `
        <tr>
            <td>${niz[i]}</td>
        </tr>
        `;
    }
    ime += `</table>`;
    document.body.innerHTML += ime;
};

tim(nasi);

// 18. Zadatak
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slike = [`1.jpg`, `cilj.png`, `misija.png`, `vizija.png`];

let mojaSlika = niz => {
    document.body.innerHTML += `<div id="da"></div>`;
    for (let i = 0; i < niz.length; i++) {
        document.getElementById(`da`).innerHTML += `<img src="${niz[i]}";>`;
    }
};

mojaSlika(slike);

// 19. Zadatak
// Ispisati dužinu svakog elementa u nizu stringova. 

let duzElemenata = niz => {
    let duzina = ``;
    for (let i = 0; i < niz.length; i++) {
        duzina = niz[i].length;
        console.log(duzina);
    }
};

duzElemenata(nasi);

// let nasi = [`Teo`, `Bogdan`, `Jokara`, `Kalina`, `Radulja`, `Beli`, `Bobi`];

// 20. Zadatak
// Odrediti element u nizu stringova sa najvećom dužinom.

let maxDuz = niz => {
    let maxL = [0].length;
    let max = ``;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > maxL) {
            maxL = niz[i].length;
            max = niz[i];
        }
    }
    console.log(max, maxL);
};
maxDuz(nasi);

// 21. Zadatak
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

// let nasi = [`Teo`, `Bogdan`, `Jokara`, `Kalina`, `Radulja`, `Beli`, `Bobi`];

let prosDuzina = niz => {
    let broj = 0;
    let avrg = ``;
    let sumaDuz = 0;
    if (niz.length > 1) {
        for (let i = 0; i < niz.length; i++) {
            sumaDuz += niz[i].length;

        }
        avrg = sumaDuz / niz.length;
        // console.log(avrg);
        for (let i = 0; i < niz.length; i++) {
            if (niz[i].length > avrg) {
                broj++;
            }
        }
        console.log(broj);
    }
    else {
        console.log(`Postoji samo jedan element.`);
    }
};

prosDuzina(nasi);



// 22. Zadatak
// Odrediti broj javljanja slova 'a’ kod elemenata u nizu.

// let nasi = [`Teo`, `Bogdan`, `Jokara`, `Kalina`, `Radulja`, `Beli`, `Bobi`];

let sadrziA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        let element = niz[i];
        for (let n = 0; n < element.length; n++) {
            
            if (element[n] === `a`) {
                broj++;
            }
        }
    }
    console.log(broj);
    
};

sadrziA(nasi);





// 22. Zadatak
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let brojSadrziA1 = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].includes("a")) {
            broj++;
        }
    }
    return broj;
}

console.log(brojSadrziA1(nasi));

// 23. Zadatak
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

nasi = [`aleksa`,`Teo`, `Bogdan`, `Jokara`, `Kalina`, `Radulja`, `Beli`, `Bobi`, `Aleksic`];


//   niz[i][0].includes(`a`)        includes

let pocniA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
       if(niz[i][0].includes(`a`) || niz[i].includes(`A`)){
           broj++;
       }
    }
    console.log(broj);
};
pocniA(nasi);


//                          startsWith
let pocniA1 = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
       if(niz[i].startsWith(`a`) || niz[i].startsWith(`A`)){
           broj++;
       }
    }
    console.log(broj);
};
pocniA1(nasi);


//////////////////////////////////////////////////////

// 24. Zadatak
// Dati nizovi
niz1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
niz2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

function treciNiz(array, array2) {
    let niz3 = [];
    if (array.length > array2.length)
        for (let i = 0; i < array.length; i++) {
            if (array[i] != undefined) {
                niz3.push(array[i]);
            }
            if (array2[i] != undefined) {
                niz3.push(array2[i]);
            }
            
    }
    else {
        for (let i = 0; i < array2.length; i++) {
            if (array[i] != undefined) {
                niz3.push(array[i]);
            }
            if (array2[i] != undefined) {
                niz3.push(array2[i]);
            }
        }    
    }

    console.log(niz3);
}
treciNiz(niz1, niz2);




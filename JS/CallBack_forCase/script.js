// 1. Zadatak 
// Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:


// let niz1 = [1, 2, 4, 5, 6, 7];

// function ispisKonzola(poruka) {
//     console.log(poruka);
// }

// function ispis(niz, log) {
//     let message = ``;
//     for (let i = 0; i < niz.length; i++) {
//         message += niz[i] + ` `;
//     }
//     log(message)

// }

// ispis(niz1, ispisKonzola)


// // let niz1 = [1, 2, 4, 5, 6, 7];

// function ispis2(element) {
//     console.log(`Element niza je: ${element}`);
// }
// niz1.forEach(ispis2);

// niz1.forEach(element => {
//     console.log(`Element niza je: ${element}`);
// });


//	Učitiat i ispisati niz /ARRAY/.

myArray = [1, 2, 4, 13 ,5, 6, 10, 7, 8, 9];

myArray.forEach(element => {
    console.log(element);
});


// 	Učitati članove niza. Ispisati: članove niza koji su veći od slijedećeg člana.

let veciOdSledeceg = niz => {
    let ele1 = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (ele1 > niz[i]) {
            let e = ` `;
            e += ele1;
            console.log(e);
        }
        ele1 = [niz[i]];
    }
};
veciOdSledeceg(myArray);

// Učitati članove niza. Ispisati članove niza sa parnim indeksom.
console.log(`Učitati članove niza. Ispisati članove niza sa parnim indeksom.`);

// myArray = [1, 2, 4, 13, 5, 6, 10, 7, 8, 9];
//parni index 0  1  2  3   4  5   6  7  8  9
//            p  n  p  n   p  n   p  n  p  n

function parniIndex (array) {
    array.forEach((element, index) => {
        if (index % 2 == 0) {
            console.log(element);
        }
    });
}
parniIndex(myArray);

// myArray = [1, 2, 4, 13, 5, 6, 10, 7, 8, 9];
//parni index 0  1  2  3   4  5   6  7  8  9
//            p  n  p  n   p  n   p  n  p  n

// Učitati članove niza. Ispisati članove niza sa neparnim ideksom.
console.log(`Učitati članove niza. Ispisati članove niza sa neparnim ideksom.`);

function neparIndex(array) {
    array.forEach((element, index) => {
        if (index % 2 != 0) {
            console.log(element);
        }
    });
}

neparIndex(myArray);

// myArray = [1, 2, 4, 13, 5, 6, 10, 7, 8, 9];
//parni index 0  1  2  3   4  5   6  7  8  9
//            p  n  p  n   p  n   p  n  p  n

// 	Učitati članove niza. Ispisati članove niza sa ideksom koji nije djeljiv sa 4.
console.log(`Učitati članove niza. Ispisati članove niza sa ideksom koji nije djeljiv sa 4.`);

function nijeDeljiv4(array) {
    array.forEach((element, index) => {
        if (index % 4 != 0) {
            console.log(element);
        }
    });
}

nijeDeljiv4(myArray);

// Učitati članove niza. Ispisati članove niza sa parnom vrijednosti (djeljive sa 2).
console.log(`Učitati članove niza. Ispisati članove niza sa parnom vrijednosti (djeljive sa 2).`);

function parElementi(array) {
    array.forEach(element => {
        if (element % 2 == 0) {
            console.log(element);
        }
    });
}
parElementi(myArray);

// 	Učitati članove niza. Ispisati članove niza koji nisu djeljive sa 3.
console.log(`Učitati članove niza. Ispisati članove niza koji nisu djeljive sa 3.`);
function nijeDeljiv3(array) {
    array.forEach(element => {
        if (element % 3 != 0) {
            console.log(element);
        }
    });
}

nijeDeljiv3(myArray);

myArray = [1, 2, 4, 13, 5, 6, 10, 7, 8, 9, 0 , -1, 0, -3, -5, -4];
//parni index 0  1  2  3   4  5   6  7  8  9
//            p  n  p  n   p  n   p  n  p  n

// 	Učitati članove niza. Ispisati: pozitivne, nule pa negativne članove niza.
console.log(`Učitati članove niza. Ispisati: pozitivne, nule pa negativne članove niza.`);
function ispis3(array) {
    console.log(`Pozitivni clanovi niza.`);
    array.forEach(element => {
        if (element > 0) {
            console.log(element);
        }
    });    
    console.log(`Nulti clanovi niza.`);
    array.forEach(element => {
        if (element == 0) {
            console.log(element);
        }
    });    
    console.log(`Negativni clanovi niza.`);
    array.forEach(element => {
        if (element < 0) {
            console.log(element);
        }
    });
}
ispis3(myArray);

// Učitati članove niza. Ispisati susjedne članove niza čija je suma parna.
console.log(`Učitati članove niza. Ispisati susjedne članove niza čija je suma parna.`);

function sumaPar(array) {
    let prvi = array[0];
    for (let i = 1; i < array.length; i++) {
        if ((prvi + array[i]) % 2 == 0) {
            console.log(prvi, array[i]);
        }
        prvi = array[i];
    }
}

sumaPar(myArray);





/////////////////////////// NAOPAK NIZ ////////////////////////////////////////

// Učitati članove niza. Ispisati članove niza u obrnutom redoslijedu.
console.log(`Učitati članove niza. Ispisati članove niza u obrnutom redoslijedu.`);

let array = [1, 2, 3, 4, 5, 6];
//           0  1  2  3  4  5
//           6  5  4  3  2  1

function ispisNaopako(array) {
    let hvataj = [];
    for (let i = 1; i < array.length + 1; i++) {
        
        hvataj.push(array[array.length - i]);
    }
    console.log(array);
    console.log(hvataj);
}
ispisNaopako(array);

//let array = [1, 2, 3, 4, 5, 6];
//             0  1  2  3  4  5
//             6  5  4  3  2  1
/////////////////////////////////////////////////////////////////////////////////////////





// 	11. Učitati članove niza. Izračunati i ispisati sumu članova niza.
console.log(`Učitati članove niza. Izračunati i ispisati sumu članova niza.`);

function suma1(array) {
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    console.log(suma);
}
suma1(myArray);

// 13. 	Učitati članove niza. Izračunati i ispisati sumu članova niza sa parnim indeksom.
console.log(`Učitati članove niza. Izračunati i ispisati sumu članova niza sa parnim indeksom.`);
function parnaSuma(array) {
    let suma = 0;
    array.forEach((element, index) => {
        if (index % 2 == 0) {
            suma += element;
        }
    });
    console.log(suma);
}
parnaSuma(array);

// 14. 	Učitati članove niza. Izračunati i ispisati sumu članova niza sa neparnim indeksom.
console.log(`Učitati članove niza. Izračunati i ispisati sumu članova niza sa neparnim indeksom.`);
function neParnaSuma(array) {
    let suma = 0;
    array.forEach((element, index) => {
        if (index % 2 != 0) {
            suma += element;
        }
    });
    console.log(suma);
}
neParnaSuma(array);

// 15. Učitati članove niza. Izračunati i ispisati sumu članova niza čiji je indeks djeljiv sa 3.
console.log(`Učitati članove niza. Izračunati i ispisati sumu članova niza čiji je indeks djeljiv sa 3.`);
function indexDeljiv3(array) {
    let suma = 0;
    array.forEach((element, index) => {
        if(index % 3 == 0) {
            suma += element;
        }
    });
    console.log(suma);
}
indexDeljiv3(myArray);

myArray = [1, 2, 4, 13, 5, 6, 10, 7, 8, 9, 0 , -1, 0, -3, -5, -4];
//          0 1  2  3   4  5   6  7  8  9  10  11 12  13  14   15
//                  13         10       9          0           -4
console.log(0 % 3);

// 21. 	Izračunati sumu članova niza čija je vrijednost u intervalu [3,9]. 
console.log(`Izračunati sumu članova niza čija je vrijednost u intervalu [3,9].`);
function interval(array) {
    let suma = 0;
    array.forEach(element => {
        if (element >= 3 && element <= 9) {
            suma += element;
            // console.log(element);
        }
    });
    console.log(suma);
}
interval(myArray);

// 43. 	Učitati članove niza. Izračunati i ispisati aritmetički sredinu članova niza sa neparnim indeksom.
console.log(`Učitati članove niza. Izračunati i ispisati aritmetički sredinu članova niza sa neparnim indeksom.`);

function aritSredina(array) {
    let arSred = 0;
    let suma = 0;
    let b = 0;
    array.forEach((element, index) => {
        if (index % 2 != 0) {
            suma += element;
            b++;
        }
    });
    arSred  = suma / b;
    console.log(arSred);
}
aritSredina(array);

//let array = [1, 2, 3, 4, 5, 6];
//             0  1  2  3  4  5
//             6  5  4  3  2  1


// 

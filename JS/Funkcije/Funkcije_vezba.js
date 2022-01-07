//////// INTRO

// Normalna f-ja

function zbir(n, m) {
    console.log(n + m);
}

// Anonimna f-ja

let proizvod = function(n, m) {
    console.log(n * m);
}

// Skracene anonimne f-je // Arrow f-je

let square = n => {
    return n ** 2;
}

// Kada Arrow ima samo return
let kub = n => n ** 3;  // ultra skracenje


// Terinarni operator umesto If_else-a
let pork = vrstaMesa => (vrstaMesa == "pork") ? console.log(`Meso je svinjece.`)
                        : (vrstaMesa == "chicken") ? console.log(`Meso je piletina.`)
                        : (vrstaMesa == "mutton") ? console.log(`Meso je ovcije.`)
                        : (vrstaMesa == "beef") ? console.log(`Meso je junece.`)
                        : console.log(`Nije meso.`);

pork(`mouse`);


// 1. Zadatak
//Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
// Pozvati funkciju i njen rezultat ispisati u konzoli.

let sumaKubova = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i ** 3;
    }
    return suma;
}


console.log(sumaKubova(1,3));

// 2. Zadatak
// Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
// Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
// Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
// Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

let godine = godinaRodjenja => {
    let date = new Date();
    let year = date.getFullYear();
    let yearOld = year - godinaRodjenja;
    console.log(yearOld);
}
godine(1994);

// 3. Zadatak
// Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

function deljiv(n, m, k) {
    let b = 0;
    for (let i = n; i <= m; i++) {
        (i % k == 0) ? b++ : b; 
    }
    return b;
}

let deljivo = deljiv(1, 10, 3);
console.log(deljivo);

// 4. Zadatak
// Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let polecemo = (satP, minP, satS, minS) => {
    let uMP = satP * 60 + minP;
    let uMS = satS * 60 + minS;
    let letVreme = uMS - uMP;
    let letSati = Math.floor(letVreme / 60);
    let letMin = letVreme % 60;

    (satS <= 23 && satP <= 23) ? console.log(`Let je trajao ${letSati}h i ${letMin} min.`) : console.log(`Pogresan unos.`);
    
}
polecemo(24, 30, 22, 0);

// 5. Zadatak
// Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

// 1 jaban = 2 jabuke i 3 banane
// 20 % jabuka je osteceno // banane su dobre
// Math.round

function jaban(jabuke, banane) {
    let okJabuke = jabuke / 100 * 80;
    let porJabuka = Math.round(okJabuke / 2);
    let porBanana = Math.round(banane / 3);  
    console.log(porJabuka);
    console.log(porBanana);
    (porJabuka <= porBanana) ? console.log(`Sa ${jabuke} jabuka i ${banane} banana moze da se napravi ${porJabuka} jabana.`) : console.log(`Sa ${jabuke} jabuka i ${banane} banana moze da se napravi ${porBanana} jabana.`);

}

jaban(33, 33);

// 6. Zadatak
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami.
//  Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

// n = broj meseci prakse
// a = mesecna plata
// d = bonusi++

let praksa = (n, a, d) => {
    let suma = a;

    for (let i = 2; i <= n; i++) {
        suma += a + d * (i - 1);

    }
    return suma;
}
console.log(praksa(4, 50000, 5000));

// 7. Zadatak
// Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

// 4 nogare
// n1 > n2 isto koliko je i n2 > n3   kao i n3 > n4
// date su n1, n2, n3
//  n1 > n2 > n3 > n4

// n1 > x > x > ?

// function fabrika(n1, x2, x3) {
//     let n2 = "";
//     let n3 = "";
//     let n4 = "";
//     if ((n1 - x2) == (x2 - x3)) {
//         n2 = x2;
//         n3 = x3;
//     }
//     else {
//         n2 = x3;
//         n3 = x2;
//     }
//     if ((n1 - n2) == (n2 - n3)) {
//         n4 = n3 - (n2 - n3);
//     }
//     else {
//         n4 = `Duzine unetih nogarki nisu moguce.`
//     }
    

//     return n4;

// }

// let nogara4 = fabrika(100, 80, 60);
// console.log(nogara4);


////////////////////////////////////

function fabrika(n1, x2, x3) {
    let m = "";     // vrednost koja fali
    let n2 = "";
    let n3 = "";
    let n4 = "";
    // 1         fabrika(100, 80, 60); 
    //                   n1   x2  x3  
    if ((n1 - x2) == (x2 - x3) && (x2 > x3)) {
        n2 = x2;
        n3 = x3;
        n4 = n3 - (n2 - n3);
        console.log(`Jedan`);

    }
    // 2         fabrika(100, 60, 80);
    //                   n1   x2  x3
    else if ((n1 - x3) == (x3 - x2) && (x3 > x2)) {
        n2 = x3;
        n3 = x2;
        n4 = n3 - (n2 - n3);
        console.log(`Dva`);
    }
    // 3         fabrika(100, 60, 40);
    //                   n1   x2  x3
    // 5         fabrika(100, 80, 40);               
    // da bi se izbeglo mesanje slucajeva 3 i 5 
    ///////// ovaj else_if je samo za slucaj br 3      
    // dodajemo                                                  && ((x2 - x3) < (n1 - x2)

    else if (((n1 - (n1 - (x2 - x3))) == (x2 - x3)) && (x2 > x3) && ((x2 - x3) < (n1 - x2))) {
        n2 = n1 - (x2 - x3);
        n3 = x2;
        n4 = x3;
        console.log(`Tri`);
    }
    // 4          fabrika(100, 40, 60);
    //                    n1   x2  x3
    // 6          fabrika(100, 40, 80);                
    // da bi se izbeglo mesanje slucajeva 4 i 6 
    ///////// ovaj else_if je samo za slucaj br 4 
    // dodajemo                                                  && ((x3 - x2) < (n1 - x3)
    else if (((n1 - (n1 - (x3 - x2))) == (x3 - x2)) && (x3 > x2) && ((x3 - x2) < (n1 - x3))) {
        n2 = n1 - (x3 - x2);
        n3 = x3;
        n4 = x2;
        console.log(`Cetiri`);
    }
    // 5           fabrika(100, 80, 40);
    //                      n1   x2  x3
    else if (((x2 - (x2 - (n1 - x2)) ) == (n1 - x2)) && (x2 > x3)) {
        n2 = x2;
        n3 = x2 - (n1 - x2);
        n4 = x3;
        console.log(`pet`);
    }
    // 6            fabrika(100, 40, 80);
    //                       n1   x2  x3
    else if (((x3 - (x2 - (n1 - x3)) ) == (n1 - x2)) && (x3 > x2) ){
        n2 = x3;
        n3 = x3 - (n1 - x3);
        n4 = x2;
        console.log(`sest`);
    }
    // ako je unos los
    // moze da se stavi jos uslova u grane on 1-6 da bi se else ispunio
    else {
        n4 = `Unos je pogresan.`;
    }
    let vrednosti = `n1 ${n1}, n2 ${n2}, n3 ${n3}, n4 ${n4}.`; 
    return vrednosti;
}

// let kraj = fabrika(100, 80, 60);   // 1   
// console.log(kraj);

// kraj = fabrika(100, 60, 80);       // 2
// console.log(kraj);      

// kraj = fabrika(100, 60, 40);       // 3
// console.log(kraj); 

// kraj = fabrika(100, 40, 60);       // 4
// console.log(kraj); 

// kraj = fabrika(100, 80, 40);        // 5
// console.log(kraj); 

// kraj = fabrika(100, 40, 80);        // 6
// console.log(kraj); 

////////////////////////////////////////////////

// 8. Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.

// 3 broja
// dan mesec godinu

// jucerasnji datum

function PrethodniDan(dan, mesec, godina) {

    let date = new Date(godina, mesec, dan);
    
    console.log(date);

    let dani = date.getDate();
    console.log(dani);

    let meseci = date.getMonth();
    console.log(meseci);

    let godine = date.getFullYear();
    console.log(`Danasnji datum je ${dani}, mesec je ${meseci}, godina ${godine}`);
}

PrethodniDan(19, 11, 2021)

let date = new Date();
let dan = date.getUTCDate();
console.log(`Dansnji datum je ${dan}`);
let mesec = date.getUTCMonth();
let godina = date.getFullYear();
console.log(`Danasnji datum je ${dan}, mesec je ${mesec}, godina ${godina}`);





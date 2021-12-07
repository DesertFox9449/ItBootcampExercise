// 1) Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

// let vreme = new Date();
// let sati = vreme.getHours();
// console.log(sati);

// let minuti = vreme.getMinutes();
// console.log(minuti);

// console.log(`Od ponoci je proslo tacno ${sati}:${minuti}.`);

// Do ponoci

// let danSati = 24;
// let ostaliSati;
// ostaliSati = danSati - sati; 
// let danMinuti = 60;
// let ostaliMinuti;
// ostaliMinuti = danMinuti - minuti;
// if (ostaliMinuti != 0) {
//     ostaliSati--;
//     console.log(`Do ponoci je ostalo tacno ${ostaliSati}:${ostaliMinuti}.`);
// }
// else {
//     console.log(`Do ponoci je ostalo tacno ${ostaliSati}:${ostaliMinuti}.`);
// }


//////////////////////////////////////////////////////////////////
// 2) Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
// let uMinuti = 620;
// let minUSat = 60;
// let pSati = uMinuti / minUSat;
// let pMinuti = uMinuti % minUSat;



// console.log(Math.floor(pSati)); 
// console.log(pMinuti);
// console.log(`U ${uMinuti} minuta ima ${Math.floor(pSati)} sati i ${pMinuti} minuta.`);






////////////////////
// Bitno


// let j = 3.99;
// console.log(Math.floor(j)); // zaokruzuje na 0  3.4 = 3; 3.999 = 3;
// let p = 5.5;
// console.log(Math.round(p)); // zaokruzuje na sredinu 5.5 = 6 ; 5.4 = 5;
// let l = 5.1;
// console.log(Math.ceil(l)); // zaokruzuje na najvece 5.1 = 6





/////////////////////////////////////////////////////////////////////
// 3) Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

// let cena = 3000;
// let uplata = 3000;
// let kusur = uplata - cena;
// if (kusur > 0) {
//     console.log(`Kasirka treba da vrati kusur u iznosu od ${kusur} dinara.`);
// }
// else if (kusur == 0){

//     console.log(`Nema kusura.`);

// }
// else {
//     kusur = kusur * -1;
//     console.log(`Kupac je duzan da uplati jos ${kusur} dinara.`);
// }
///////////////////////////////////////////////////////////////////////////////

// 4) Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.

// let datum = new Date();
// let sati = datum.getHours();
// let min = datum.getMinutes();
// console.log(`Proslo je tacno ${sati} sati is ${min} minuta od ponoci.`);

///////////////////////////////////////////////////////////////////////////////
// 5) Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

// let datum = new Date();

// let dan = datum.getUTCDate();
// console.log(dan);

// let mesec = datum.getMonth() + 1;
// console.log(mesec);

// let godina = datum.getFullYear();
// console.log(godina);

// console.log(`Danas je ${dan}.${mesec}.${godina}.`);
// console.log(`Danas je ${mesec}.${dan}.${godina}.`);

// 6) Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.

// let evri = 120;
// let din = 1500;
// let kurs = 117;
// let din1 = evri * kurs;
// let evri1 = din / kurs;
// console.log(`Prilikom razmene ${evri} evra dobijamo ${din1} dinara.`);
// console.log(`Prilikom razmene ${din} dinara dobijamo ${evri1} evra.`);


////////////////////////////////////////////////////////////
// 7) Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

// let evri = 120;
// let usd = 1300;
// let kurs = 1.13;

// let usd1 = evri * kurs;
// console.log(`U ${evri} evra ima ${usd1} dolara.`);

// let evri1 = usd / kurs;

// console.log(`U ${usd} dolara ima ${evri1} evra.`);


//////////////////////////////////////////////////////
// 8) Temperatura iz Celzijusa u Farenhajte i obrnuto.
// let c = 30;
// let f = 86;

// let F = c * 1.8 + 32;
// console.log(F);

// let C = (f - 32) / 1.8; 
// console.log(C);

///////////////////////////////////////////////////
// 9) Temperatura iz Celzijusa u Kelvine i obrnuto.

// let c = 20;
// let k = 293.15;

// let C = k - 273.15;
// console.log(C);

// let K = c + 273.15;
// console.log(K);




// Bitno


// let j = 3.99;
// console.log(Math.floor(j)); // zaokruzuje na 0  3.4 = 3; 3.999 = 3;
// let p = 5.5;
// console.log(Math.round(p)); // zaokruzuje na sredinu 5.5 = 6 ; 5.4 = 5;
// let l = 5.1;
// console.log(Math.ceil(l)); // zaokruzuje na najvece 5.1 = 6







////////////////////////////////////////////////////////////////////////
// Dodatno vezbanje
////////////////////////////////////////////////////////////////////////







// 1) Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 

// let sati = 10;
// let min = 33;
// let uMin = 24 * 60;
// let pMin = sati * 60 + min;
// let doMin = uMin - pMin;
// console.log(uMin);
// console.log(`Proslo je ${pMin} minuta od ponoci.`);
// console.log(`Ostalo je ${doMin} minuta do ponoci.`);

// 8) Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
// 1 galon = 3.785 litara.
// let galon = 30;
// let litar = 10;
// let odnos = 3.785;


// let g = litar / odnos;
// console.log(`U ${litar} litar ima ${g} galona.`);

// let l = galon * odnos; 
// console.log(`U ${galon} galonar ima ${l} litara.`);

// 5) Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 



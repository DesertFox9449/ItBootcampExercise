// 1. Za dva uneta broja ispisati koji je veći a koji je manji.
// let b1  = 20;
// let b2 = 25;
// if (b1 < b2) {
//     console.log(`Broj ${b1} je manji od broja ${b2}.`);
// }
// else {
//     console.log(`Broj ${b2} je manji od broja ${b1}.`);
// }

// 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
// temp = 2;
// if (temp >= 0) {
//     console.log(`Temperatura je u plusu.`);
// }
// else {
//     console.log(`Temperatura je u minusu.`);
// }

// 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
// let pol = "g";
// if (pol == "m" || pol == "M") {
//     document.write(`<img src="https://media.istockphoto.com/vectors/male-thin-line-vector-icon-vector-id868651322?k=20&m=868651322&s=612x612&w=0&h=oSeMfkJ15dYpsnGyqHHCYRa-5nd36vgcvE6vchwAOos=">`);

//     // document.body.innerHTML +=`<img src="">`;
// }
// else if (pol == "f" || pol == "F") {
//     document.write(`<img src="https://media.gettyimages.com/vectors/female-symbol-on-transparent-background-vector-id1284444739?s=612x612"`);

//     // document.body.innerHTML +=`<img src="">`;
// }
// else {
//     document.write(`<h1>Uneli ste pogresan pol. Molimo pokusajte jos jednom.</h1>`);
// }

// 4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

// let datum = new Date();
// let sati = datum.getHours();
// console.log(sati);
// if (sati <= 12) {
//     console.log(`Trenutno je ${sati}, jutro.`);
// }
// else {
//     console.log(`Trenutno je ${sati}, popodne.`);
// }

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

// let datum = new Date();
// let tGod = datum.getFullYear();
// console.log(tGod);
// let rGod = 2004;
// let oGod = tGod - rGod 
// if (oGod >= 18) {
//     console.log(`Osoba rodjena ${rGod} ima ${oGod} godina, i punoletna je.`);
// }
// else {
//     console.log(`Osoba rodjena ${rGod} ima ${oGod} godina, i maloletna je.`);
// }

// 5. Dodatak
//Za preuzetu godinu , mesec i dan sa računara i unetu godinu, mesec i dan rođenja izračunati da li je osoba punoletna ili maloletna.

// let datum = new Date();

// let god = datum.getFullYear();
// console.log(god);

// let mes = datum.getMonth() + 1;
// console.log(mes);

// let dan = datum.getUTCDate();
// console.log(dan);

// // Rodjenje
// let godR = 2004;
// let mesR = 12;
// let danR = 7;

// // Starost
// let godS = god - godR;
// console.log(godS);

// let mesS = mes - mesR;
// console.log(mesS);

// let danS = dan - danR;
// console.log(danS);

// // proveravamo da li osoba ima vise od 18 godina
// if (godS > 18) {
//     console.log(`Osoba je punoletna.`);
// }
// // ako osoba ima 18 godina proveravamo mesec kad je rodjena
// else if (godS == 18) {
//     // ako je mesec starosti veci od 1 
//     if (mesS >= 1) {
        
//             console.log(`Osoba je punoletna.`);

        
//     }
//     // ako je mesec starosti jednak nuli onda gledamo dane
//     else if (mesS == 0) {
//         // ako su dani veci ili jednaki nuli
//         if (danS >= 0) {
//             console.log(`Osoba je punoletna.`);
//         }
//         // ako su dani manji od nule
//         else {
//             console.log(`Osoba je maloleta.`);
//         }
//     }
// }
// else {
//     console.log(`Osoba je maloletna.`);
// }




//  6. Odrediti najveći od tri uneta broja.

// let b1 = 310;
// let b2 = 23;
// let b3 = 14;

// if (b1 > b2 && b1 > b3) {
//     console.log(`Broj ${b1} je najveci.`);
// }
// else if (b2 > b1 && b2 > b3) {
//     console.log(`Broj ${b2} je najveci.`);
// }
// else {
//     console.log(`Broj ${b3} je najveci.`);
// }

///////////////////////////// Drugi nacin
//  6. Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

// let b1 = 100;
// let b2 = 230;
// let b3 = 140;


// let p = b1; // pretpostavka
// // Zamena promenjive novom promenjivom kojom testiramo drugu i trecu
// // ako su druge promenljive vece preuzimamo njihovu vrednost

// if (p > b2) {
//     if (p > b3){
//         console.log(`Broj ${p} je najveci.`);
//     }
//     else {
//         p = b3;
//         console.log(`Broj ${p} je najveci.`);
//     }
// }
// else {
//     p = b2;
//     if (p > b3) {
//         console.log(`Broj ${p} je najveci.`);
//     }
//     else {
//         p = b3;
//         console.log(`Broj ${p} je najveci.`);
//     }
// }

////////////////////////////////// bolji nacin.................

// let b1 = 100;
// let b2 = 230;
// let b3 = 140;

// let maks = b1; //pretpostavka

// if (maks < b2) {
//     maks = b2;
// }
// if (maks < b3) {
//     maks = b3;
// }
// console.log(`${maks} je najveci broj.`);





// EXTRA ZADATAK Odrediti velicinu tri broja on najveceg ka najmanjem

// let b1 = 150;
// let b2 = 230;
// let b3 = 2140;

// if (b1 > b2) {
//     if (b1 > b3) {
//         console.log(`Broj ${b1} je najveci.`);
//         if (b2 > b3) {
//             console.log(`Broj ${b2} je srednji.`);
//             console.log(`Broj ${b3} je najmanji.`);
//         }
//         else {
//             console.log(`Broj ${b3} je srednji.`);
//             console.log(`Broj ${b2} je najmanji.`);
//         }
//     }
//     else {
//         console.log(`Broj ${b3} je najveci.`);
//         console.log(`Broj ${b1} je srednji.`);
//         console.log(`Broj ${b2} je najmanji.`);
//     }
// }
// else if (b2 > b3) {
//     console.log(`Broj ${b2} je najveci.`);
//     if (b1 > b3) {
//         console.log(`Broj ${b1} je srednji.`);
//         console.log(`Broj ${b3} je najmanji.`);
//     }
//     else {
//         console.log(`Broj ${b3} je srednji.`);
//         console.log(`Broj ${b1} je najmanji.`);
//     }

// }
// else {
//     console.log(`Broj ${b3} je najveci.`);
//     console.log(`Broj ${b2} je srednji.`);
//     console.log(`Broj ${b1} je najmanji.`);
// }


// // Unesite pozitivan ceo broj i ukoliko je manji od 10 ispisati „prva desetica“, ukoliko je manji od 20 ispisati „druga desetica“.
// U ostalim slučajevima napisati „veći od 20“.

// let b = 28;
// if (b <= 10) {
//     console.log(`Broj ${b} je prva desetica.`);
// }
// else if (b <= 20) {
//     console.log(`Broj ${b} je druga desetica.`);
// }
// else {
//     console.log(`Broj ${b} je veci od dvadeset.`);
// }

// Za upisanu ocenu odrediti da li je ucenik odlican, vrlo dobar, dobar, dovoljan, nedovoljan

// let ocena = 2;

// if (ocena == 5) {
//     console.log(`Ocena je odlican 5.`);
// }
// else if (ocena == 4) {
//     console.log(`Ocena je vrlo dobar 4.`);
// }
// else if (ocena == 3) {
//     console.log(`Ocena je dobar 3.`);

// }else if (ocena == 2) {
//     console.log(`Ocena je dovoljan 2.`);
// }
// else if (ocena == 1) {
//     console.log(`Ocena je nedovoljan 1.`);
// }
// else {
//     console.log(`Uneli ste pogresnu ocenu.`);
// }

// 7. Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.

// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

// let poeni = 465;
// if (poeni < 0) {
//     console.log(`Los unos poena.`);
// }
// else if (poeni < 50) {
//     console.log(`Ucenik je pao ispit.`);
// }
// else if (poeni < 60) {
//     console.log(`Ucenik je dobio 6.`);
// }
// else if (poeni < 70) {
//     console.log(`Ucenik je dobio 7.`);
// }
// else if (poeni < 80) {
//     console.log(`Ucenik je dobio 8.`);
// }
// else if (poeni < 90) {
//     console.log(`Ucenik je dobio 9.`);
// }
// else if (poeni <= 100) {
//     console.log(`Ucenik je dobio 10.`);
// }
// else {
//     console.log(`Los unos poena.`);
// }

// drugi nacin////////////////////////

// let poeni = 100;

// if (poeni > 0 && poeni < 50) {
//     console.log(`Ucenik je pao ispit.`);
// }
// else if(poeni > 50 && poeni < 59)  {
//     console.log(`Ucenik je dobio ocenu 6.`);
// }
// else if(poeni > 60 && poeni < 69)  {
//     console.log(`Ucenik je dobio ocenu 7.`);
// }
// else if(poeni > 70 && poeni < 79)  {
//     console.log(`Ucenik je dobio ocenu 8.`);
// }
// else if(poeni > 80 && poeni < 89)  {
//     console.log(`Ucenik je dobio ocenu 9.`);
// }
// else if(poeni > 90 && poeni <= 100)  {
//     console.log(`Ucenik je dobio ocenu 10.`);
// }
// else {
//     console.log(`Pogresan unos podataka.`);
// }

// 8. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

// let date = new Date();
// let day = date.getUTCDay();
// console.log(day);
// if (day == 6 || day == 0) {
//     console.log(`U pitanju je vikend.`);
// }
// else {
//     console.log(`U pitanju je radni dan.`);
// }

////////////////////////// Drugi nacin

// let date = new Date();
// let day = date.getUTCDay();
// if (day == 0) {
//     console.log(`U pitanju je nedelja, odnosno vikend.`);
// }
// else if (day == 6) {
//     console.log(`U pitanju je subota, odnosno vikend.`);
// }
// else {
//     console.log(`U pitanju je radni dan.`);
// }



// 9. Za vreme preuzeto sa računara ispisati 
// dobro jutro za vreme manje od 12 sati ujutru, 
// dobar dan za vreme manje od 18 sati 

// let date = new Date();
// let sati = date.getUTCHours();

// if (sati < 12) {
//     console.log(`Dobro jutro.`);
// }
// else if (sati < 18) {
//     console.log(`Dobar dan.`);
// }
// else {
//     console.log(`Dobro vece.`);
// }

/////// DRUGI NACIN

// let date = new Date();
// let sati = date.getUTCHours();

// if (sati >= 5 && sati < 12) {
//     console.log(`Dobro jutro.`);
// }
// else if (sati >= 12 && sati < 18) {
//     console.log(`Dobar dan.`);
// }
// else {
//          console.log(`Dobro vece.`);
//      }

// 10. Uporediti dva uneta datuma i ispisati koji od njih je raniji.

// let god1 = 2001;
// let mes1 = 9;
// let dan1 = 4;

// let god2 = 2001;
// let mes2 = 9;
// let dan2 = 4;

// if (god1 > god2) {
//     // god2 je stariji datum
//     console.log(`Drugi datum je stariji od prvog datuma.`);
// }
// else if (god2 > god1) {
//     // god1 je stariji datum
//     console.log(`Prvi datum je stariji od drugog datuma.`);
// }
// else {
//     if (mes1 > mes2) {
//         console.log(`Drugi datum je stariji od prvog datuma.`);
//     }
//     else if (mes2 > mes1) {
//         console.log(`Prvi datum je stariji od drugog datuma.`);
//     }
//     else {
//         if (dan1 > dan2) {
//             console.log(`Drugi datum je stariji od prvog datuma.`);
//         }
//         else if (dan2 > dan1) {
//             console.log(`Prvi datum je stariji od drugog datuma.`);
//         }
//         else {
//             console.log(`Datumi su isti.`);
//         }
//     }

// }    


// 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

// let pR = 9; //pocetak rada
// let kR = 17; // kraj rada

// // uzeti vreme
// let date = new Date();
// let sati = date.getHours();
// let min = date.getMinutes();

// console.log(sati, min);

// // prvi nacin

// if (sati >= pR) {
//     if (sati <= kR) {
//         console.log(`Firma radi.`);
//     }
//     else {
//         console.log(`Firma ne radi.`);
//     }
// }
// else {
//     console.log(`Firma ne radi.`);
// }

// // drugi nacin

// if (sati >= pR && sati <= kR) {
//     console.log(`Firma radi.`);
// }
// else {
//     console.log(`Firma ne radi.`);
// }




// 12. Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.

// // lekar broj 1
// let l1p = 11;
// let l1k = 13;

// // lekar broj 2
// let l2p = 12;
// let l2k = 22;

// // pitamo da li je pocetak radnog vremena lekara 1 vece ili jednako pocetku RV lek2
// // i da li je PRV lek1 manji od kraja RV lek2

// // ili da je PRV lek1 manje ili jednako PRV lek2 a manje od KRV lek2

// if (l1p >= l2p) {
//     if (l1p >= l2k){
//         console.log(`Radno vreme se ne prekalapa.`);
//     }
//     else if (l1p < l2k) {
//         console.log(`Radno vreme se preklapa.`);
//     }
// }
// else if (l1p < l2p){
//     if(l1p < l2k) {
//         console.log(`Radno vreme se ne prekalapa.`);
//     }
//     else {
//         console.log(`Radno vreme se preklapa.`);
//     }
// }
// else {
//     console.log(`Radno vreme se preklapa.`);
// }





// 13. Za uneti broj ispitati da li je paran ili nije. 

// let b = 10;

// if (b % 2 == 0) {
//     console.log(`Broj je paran.`);
// }
// else {
//     console.log(`Broj je neparan.`);
// }

// 14. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

// let b = 7;

// if (b % 3 == 0) {
//     console.log(`Broj ${b} je deljiv sa 3.`);
// }
// else {
//     console.log(`Broj ${b} nije deljiv sa 3.`);
// }

// 15. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

// let b1 = 28;
// let b2 = 44;
// let res;
// if (b1 > b2) {
//     res = b1 - b2;
//     document.body.innerHTML +=`Razlika brojeva je ${res}.`;
// }
// else if (b1 < b2) {
//     res = b2 - b1;
//     document.body.innerHTML +=`Razlika brojeva je ${res}.`;
// }


// 16. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

// let b = 9;
// let p;
// let s;
// if (b <= 0) {
//     s = b - 1;
//     console.log(`Broj ${s} je predhodnik broja ${b}. `);
// }
// else {
//     s = b + 1;
//     console.log(`Broj ${s} je sledbenik broja ${b}.`);
// }

// 17. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

// let b1 = 13;
// let b2 = 10
// let b3 = 28;


// if (b1 > b2) {
//     if (b1 > b3) {
//         console.log(`${b1} je najveci broj.`);
//         if (b2 > b3) {
//             console.log(`${b2} je srednji broj.`);
//             console.log(`${b3} je najmanji broj.`);
//         }
//         else {
//             console.log(`${b3} je srednji broj.`);
//             console.log(`${b2} je najmanji broj.`);
//         }

//     }
//     else {
//         console.log(`${b3} je najveci broj.`);
//         console.log(`${b1} je srednji broj.`);
//         console.log(`${b2} je najmanji broj.`);
//     }
// }
// else {
//     if (b2 > b3) {
//         console.log(`${b2} je najveci broj.`);
//         if (b1 > b3) {
//             console.log(`${b1} je srednji broj.`);
//             console.log(`${b3} je najmanji broj.`);
//         }
//         else {
//             console.log(`${b3} je srednji broj.`);
//             console.log(`${b1} je najmanji broj.`);
//         }
//     }
//     else {
//         console.log(`${b3} je najveci broj.`);
//         console.log(`${b2} je srednji broj.`);
//         console.log(`${b1} je najmanji broj.`);
//     }
// }

////////////////////// Drugi nacin

// let b1 = 33;
// let b2 = 40
// let b3 = 28;

// if (b1 > b2 && b1 > b3) {
//     console.log(`${b1} je najveci broj.`);
//     if (b2 > b3) {
//         console.log(`${b2} je srednji broj.`);
//         console.log(`${b3} je najmanji broj.`);
//     }
//     else {
//         console.log(`${b3} je srednji broj.`);
//         console.log(`${b2} je najmanji broj.`);
//     }
// }
// else if (b2 > b1 && b2 > b3){
//     console.log(`${b2} je najveci broj.`);
//     if (b1 > b3) {
//         console.log(`${b1} je srednji broj.`);
//         console.log(`${b3} je najmanji broj.`);
//     }
//     else {
//         console.log(`${b3} je srednji broj.`);
//         console.log(`${b1} je najmanji broj.`);
//     }
// }
// else {
//     console.log(`${b3} je najveci broj.`);
//     if (b1 > b2) {
//         console.log(`${b1} je srednji broj.`);
//         console.log(`${b2} je najmanji broj.`);
//     }
//     else {
//         console.log(`${b2} je srednji broj.`);
//         console.log(`${b1} je najmanji broj.`);
//     }
        
// }

// 18. Za učitani broj ispitati da li je ceo.

// let b = -234;

// if (b % 1 == 0) {
//     console.log(`Broj ${b} je ceo broj.`);
// }
// else {
//     console.log(`broj ${b} je decimalni broj.`);
// }



// Drugi nacin preko Math.floor

// let b = 12.2;
// if (b - Math.floor(b) == 0) {
//     console.log(`Ceo broj`);
// }
// else {
//     console.log(`Nije ceo broj.`);
// }

//if (Math.floor(b) == b)  // jos jedan nacin



// 19. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

// isti kao 17

// 20. Učitati dva cela broja i ispitati da li je veći od njih paran. 

// let b1 = 51;
// let b2 = 60;

// if (b1 > b2){
//     if (b1 % 2 == 0) {
//         console.log(`Broj ${b1} je veci i paran je.`);
//     }
//     else {
//         console.log(`Broj ${b1} je veci i neparan je.`);
//     }
// }
// else {
//     if (b2 % 2 == 0) {
//         console.log(`Broj ${b2} je veci i paran je.`);
//     }
//     else {
//         console.log(`Broj ${b2} je veci i neparan je.`);
//     }
// }

// 21. Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora. 

// let b1 = 13;
// let b2 = 16;
// let b3 = 19;

// if (b1 > b2 && b1 > b3) {
//     console.log(`${b1} je najveci broj.`);
// }
// else if (b2 > b1 && b2 > b3) {
//     console.log(`${b2} je najveci broj.`);
// }
// else {
//     console.log(`${b3} je najveci broj.`);
// }

// 22. Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

// t = -50;
// if (t < -15 || t > 40) {
//     console.log(`Temperatura od ${t} stepeni je ekstremna.`);
// }
// else {
//     console.log(`Temperatura od ${t} stepeni je normalna.`);
// }

// 23. Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// let date = new Date();
// let g = date.getUTCFullYear();
// console.log(g);
// g = 2403;
// if ((g % 4 == 0 && g % 100 != 0) || (g % 400 == 0)) {
//     console.log(`Godina ${g} je prestupna.`);
// }
// else {
//     console.log(`Godina ${g} nije prestupna.`);
// }




// 24 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

// // Radni dan
// let pRD = 9;
// let kRD = 20;

// // Vikend
// let pRV = 10;
// let kRV = 18;

// // prva stvar je da ustanovimo koji je danas dan///// Vikend ili radni dan
// let date = new Date();
// let day = date.getDay();
// console.log(day);

// // druga stvar je da uzmemo trenutne sate
// let sati = date.getHours();
// console.log(sati);

// // nakon sto zavrisimo program vracamo se ovde
// // testiramo softver
// sati = 9;
// day = 6;

// // proveravamo dan a zatim i radno vreme tog dana

// if (day >= 1 && day <= 5) {
//     // radni dan
//     // uporedjujemo trenutno vreme sa radnim vremenom za radni dan
//     if (sati >= pRD && sati <= kRD) {
//         console.log(`Butik je trenutno otvoren.`);
//     }
//     else {
//         console.log(`Butik je trenutno zatvoren.`);
//     }
// }
// else {
//     // vikend
//     // uporedjujemo trenutno vreme sa radnim vremenom za vikend
//     if (sati >= pRV && sati < kRV) {
//         console.log(`Butik je trenutno otvoren.`);
//     }
//     else {
//         console.log(`Butik je trenutno zatvoren.`);
//     }
// }


// 12. ponovo

// Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.

// lekar broj 1
// let l1p = 7;
// let l1k = 13;


// // lekar broj 2
// let l2p = 6;
// let l2k = 12;


// // uporediti kraj radnog vremena prvog i pocetak drugog
// // i obrnuto

// if (l2p >= l1k) {
//     console.log(`Radno vreme se ne preklapa`);
// }
// else if (l1p >= l2k) {
//     console.log(`Radno vreme se ne preklapa`);
// }
// else {
//     console.log(`Radno vreme se preklapa`);
// }


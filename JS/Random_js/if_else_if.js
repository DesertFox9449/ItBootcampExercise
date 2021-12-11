// Operatori poredjenja

// Ispitati jednakost vrednosti 3 i “3” po vrednosti.

let x = 3;
let y = "3";
if (x == y) {
    console.log(`Vrednosti ${x} i ${y} su jednaki po vrednosti.`);
}
else {
    console.log(`Vrednosti ${x} i ${y} nisu jednaki po vrednosti.`);
}
if (x === y) {
    console.log(`Vrednosti ${x} i ${y} su jednaki po vrednosti i tipu.`);
}
else {
    console.log(`Vrednosti ${x} i ${y} nisu jednaki po vrednosti i tipu.`);
}
// Zadaci za vezbu

// 1) Za dva uneta broja ispisati koji je veći a koji je manji.

let b1 = 12;
let b2 = 17;
if (b1 > b2) {
    console.log(`Broj ${b1} je veci od broja ${b2}.`);
}
else {
    console.log(`Broj ${b2} je veci od broja ${b1}.`);
}

// 2) Ispisati da li je uneta temperatura u plusu ili minusu

let temp = 2;
if (temp >= 0) {
    console.log(`Temperatura od ${temp} je u plusu.`);
} 
else {
    console.log(`Temperatura od ${temp} je u minusu.`);
}

// 3) U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 

let pol = "d";

if (pol == "m" || pol == "M") {
    document.write(`<img src="https://media.istockphoto.com/vectors/male-thin-line-vector-icon-vector-id868651322?k=20&m=868651322&s=612x612&w=0&h=oSeMfkJ15dYpsnGyqHHCYRa-5nd36vgcvE6vchwAOos=">`);
}
else if (pol == "f" || pol == "F") {
    document.write(`<img src="https://ak.picdn.net/shutterstock/videos/1024088378/thumb/6.jpg?ip=x480">`);
}
else {
    document.write(`<h1>Birate nepostojeci pol, molimo vas da pokusate jos jednom.</h1>`);
}

// 4) U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

//  let vreme = new Date("12:00 10 11 2000");
// let sati = vreme.getHours();
// let danSati = 24;
// console.log(sati);
// if (sati >= 12) {
//     console.log(`Trenutno je ${sati} sati, popodne.`);
// }
// else{
//     console.log(`Trenutno je ${sati} sati, prepodne.`);
// }

// 5) Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let vreme = new Date();
let godina = vreme.getUTCFullYear();
let godRodjenja = 2004;
// console.log(godina);
if (godina - godRodjenja >= 18) {
    console.log(`Osoba je punoletna.`);
}
else{
    console.log(`Osoba je maloletna.`);
}

// 6) Odrediti najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

let a = 17;
let b = 23;
let c = 18;

// if (a > b) {

//     if(a > c) {
//         console.log(`${a} je najveci broj`);
//     }
//     else {
//         console.log(`${c} je najveci broj`);
//     }
// }
// else {
//     if(b > c) {
//         console.log(`${b} je najveci broj`);
//     }
//     else{
//         console.log(`${c} je najveci broj`);
//     }
// }

if (a > b && a > c) {
    console.log(`Broj ${a} je najveci!`);
}
else if (b > a && b > c) {
    console.log(`Broj ${b} je najveci!`);
}
else {
    console.log(`Broj ${c} je najveci!`);
}


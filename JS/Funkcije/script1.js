console.log(`Funkcije`);


function zdravo(params) {
    console.log(`Zdravo svete!!!`);
}

zdravo();
console.log(`Hello!`);
zdravo();

function stampaj(input) {
    console.log(`${input}`);
}

let me = `Aleksandar`;
stampaj(me);

me = "radnaskelA";
stampaj(me);

stampaj("Mene!!!")
//////////////////////////////////////

function korisnik (ime, prezime) {
    console.log(`Korisnikovo puno ime je ${ime} ${prezime}.`);
}
korisnik("Pera", "Zdera");

function korisnikGod(ime, prezime, godine) {
    console.log(`Korisnik ${ime} ${prezime} ima ${godine} godina.`);
}
korisnikGod("Aleksandar", "Zikic", "27");

///////////////////////////////////////

// Zbir dva broja

function zbir(n, m) {
    let z = n + m;
    console.log(z);
}

zbir(10,20);

////////////////////////////////////////

// Vrati zbir dva broja

function zbirDvaBroja(n, m) {
    let z = n + m;
    return z;
}

// let z = zbirDvaBroja(15, 25);
// console.log(z);\

console.log(zbirDvaBroja(15, 25));

let pork = vrstaMesa => (vrstaMesa == "pork") ? console.log(`Meso je svinjece.`)
                        : (vrstaMesa == "chicken") ? console.log(`Meso je piletina.`)
                        : (vrstaMesa == "mutton") ? console.log(`Meso je ovcije.`)
                        : (vrstaMesa == "beef") ? console.log(`Meso je junece.`)
                        : console.log(`Nije meso.`);

pork(`mouse`);
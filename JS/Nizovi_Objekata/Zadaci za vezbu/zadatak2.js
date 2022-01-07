//Zadatak 2.

// Objekat Polaznik sadrži ime (string), prezime (string), kao i ocena (ceo broj između 0 i 100, što zapravo predstavlja broj bodova na završnom testu).

// Objekat Kurs (naravno, neki iz ITBootcamp-a) sadrži naziv (string), grad u kojem se održava (string), kao i niz polaznici (elementi niza su objekti tipa Polaznik).

// Kreirati niz od barem 4 kursa. Svaki kurs može imati proizvoljan broj polaznika, i staviti barem tri polaznika za svaki kurs. Voditi se sledećim pravilima prilikom kreiranja svakog objekta:

// Razvoj veb stranica: JS // Niš

let polaznik1 = {
    ime: `Djordje`,
    prezime: `Stosic`,
    ocena: 70,
};

let polaznik2 = {
    ime: `Aleksandar`,
    prezime: `Stoiljkovic`,
    ocena: 65,
};

let polaznik3 = {
    ime: `Aleksandar`,
    prezime: `Zikic`,
    ocena: 80,
};

let polaznik4 = {
    ime: `Darko`,
    prezime: `Simic`,
    ocena: 85,
};
////////////////////
// “Razvoj veb stranica: PHP // Beograd

let polaznik5 = {
    ime: `Bojan`,
    prezime: `Ristic`,
    ocena: 90,
};
let polaznik6 = {
    ime: `Miljan`,
    prezime: `Pantovic`,
    ocena: 95,
};
let polaznik7 = {
    ime: `Nikola`,
    prezime: `Glavonjic`,
    ocena: 100,
};
let polaznik8 = {
    ime: `Nikola`,
    prezime: `Stojanovic`,
    ocena: 74,
};
////////////////////////
// Novi Sad // Testiranje softvera: QA

let polaznik9 = {
    ime: `Kristina`,
    prezime: `Jovanovic`,
    ocena: 52,
};

let polaznik10 = {
    ime: `Vladan`,
    prezime: `Stoic`,
    ocena: 88,
};

let polaznik11 = {
    ime: `Vukasin`,
    prezime: `Mladzic`,
    ocena: 71,
};

let polaznik12 = {
    ime: `Vukasin`,
    prezime: `Babic`,
    ocena: 86,
};

//////////////////////
// Kosovska Mitrovica / Osnove programiranja: Java
let polaznik13 = {
    ime: `Jana`,
    prezime: `Jovanovic`,
    ocena: 92,
};

let polaznik14 = {
    ime: `Ivan`,
    prezime: `Soic`,
    ocena: 28,
};

let polaznik15 = {
    ime: `Nemanja`,
    prezime: `Madzic`,
    ocena: 71,
};

let polaznik16 = {
    ime: `Aleksa`,
    prezime: `Baic`,
    ocena: 66,
};

let polaznik17 = {
    ime: `Ivana`,
    prezime: `Dinic`,
    ocena: 56,
};

let kurs1 = {
    naziv: [`Razvoj veb stranica: JS`, `Osnove programiranja: Java`],
    grad: `Nis`,
    polaznici: [polaznik1, polaznik2, polaznik3, polaznik4 ]
};
let kurs2 = {
    naziv: [`Razvoj veb stranica: PHP`, `Testiranje softvera: QA`],
    grad: `Beograd`,
    polaznici: [polaznik5, polaznik6, polaznik7, polaznik8 ]
};
let kurs3 = {
    naziv: [`Testiranje softvera: QA`, `Razvoj veb stranica: PHP`],
    grad: `Novi Sad`,
    polaznici: [polaznik9, polaznik10, polaznik11, polaznik12 ]
};
let kurs4 = {
    naziv: [`Osnove programiranja: Java`, `Testiranje softvera: QA`],
    grad: `Kosovska Mitrovica`,
    polaznici: [polaznik13, polaznik14, polaznik15, polaznik16, polaznik17 ]
};

let kursevi = [kurs1, kurs2, kurs3, kurs4];

//////////////////////////////////////////////////
// 1. Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.
console.log(`1)))) Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.`);

let odrzKursa = (array, city) => {
    let broj = 0;
    array.forEach(k => {
        if (k.grad == city) {
            broj = k.naziv.length;
        }
    });
    return broj;
    
};
console.log(odrzKursa(kursevi, `Nis`));

// 2. Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.
console.log(`2))))) Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.`);

let nazivKurseva = (array, ime) => {
    let globalniBr = 0;
    array.forEach(k => {
        let lokalniBr = 0;
        k.naziv.forEach(nKursa => {
            if (nKursa == ime) {
                lokalniBr++;
            }
        });
        globalniBr += lokalniBr;
    });
    return globalniBr;
}
console.log(nazivKurseva(kursevi, `Testiranje softvera: QA`));

// 3. Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.
console.log(`3))) Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.`);

let maxBrojPolaznika = array => {
    let maxPolaznika = Number.MIN_SAFE_INTEGER;
    array.forEach(kurs => {
        if (kurs.polaznici.length > maxPolaznika) {
            maxPolaznika = kurs.polaznici.length;
        }
    });
    console.log(maxPolaznika);
    array.forEach(kurs => {
        if (maxPolaznika == kurs.polaznici.length) {
            console.log(kurs.naziv[0]);
            console.log(kurs.grad);
        }
    }); 
};

maxBrojPolaznika(kursevi);

// 4. Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.
console.log(`4)))) Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.`);

let sviPolaznici = (array, lastName) => {
    array.forEach(kurs => {
        kurs.polaznici.forEach(pol => {
            if (pol.prezime == lastName) {
                console.log(pol.ime);
                console.log(pol.prezime);
                console.log(kurs.grad);
                kurs.naziv.forEach(nKursa => {  // dva kursa
                    console.log(nKursa);
                });
            }
        });
    });
};
sviPolaznici(kursevi, `Dinic`);

// 5. Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.
console.log(`5)))))))))) Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.`);
let prosOcena = array => {
    let najProsOcena = Number.MIN_SAFE_INTEGER;
    
    array.forEach(kurs => {
        let suma = 0;
        let brPolaznika = 0;
        
        let avrgOcena = 0;
        kurs.polaznici.forEach(polaznik => {
            suma += polaznik.ocena;
            brPolaznika++;
        });
        // console.log(suma);
        // console.log(brPolaznika);
        avrgOcena = suma / brPolaznika;
        
        if (najProsOcena < avrgOcena) {
            najProsOcena = avrgOcena;
        }
    });
    console.log(najProsOcena);



    array.forEach(kurs => {
        let suma = 0;
        let brPolaznika = 0;
        
        let avrgOcena = 0;
        kurs.polaznici.forEach(polaznik => {
            suma += polaznik.ocena;
            brPolaznika++;
        });
        // console.log(suma);
        // console.log(brPolaznika);
        avrgOcena = suma / brPolaznika;
        
        if (najProsOcena == avrgOcena) {
            kurs.naziv.forEach(nazivKursa => {
                console.log(nazivKursa);
            });
            console.log(kurs.grad);
        }
    });
    
};
prosOcena(kursevi);

// 6. Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.
console.log(`6))))))  Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.`);

let uspesanKurs = array => {
    let brUspesnih = 0;
    array.forEach(kurs => {
        
        let brLos = 0;
        kurs.polaznici.forEach(polaznik => {
            if (polaznik.ocena < 65) {
                brLos++;
            }
        });
        if (brLos == 0) {
            brUspesnih++;
        }
    });
    
    return brUspesnih;
};

console.log(uspesanKurs(kursevi));

// 7. 
 


// Zadatak 1.
// Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).

// Kreirati niz od barem 4 studenta. Napisati sledeće arrow funkcije:


let student1 = {
    firstName: `Pera`,
    lastName: `Peric`,
    year: 1,             // 1 - 5
    grades: [7, 9, 9, 8, 9, 7, 9, 9], 
};

let student2 = {
    firstName: `Aleksandar`,
    lastName: `Zikic`,
    year: 3,             // 1 - 5
    grades: [7, 6], 
};

let student3 = {
    firstName: `Stefan`,
    lastName: `Dinic`,
    year: 5,             // 1 - 5
    grades: [10, 10, 10, 9, 9, 9, 10, 10], 
};

let student4 = {
    firstName: `Lazar`,
    lastName: `Djordjevic`,
    year: 2,             // 1 - 5
    grades: [6, 10, 9, 8, 8, 10, 7, 7], 
};

let student5 = {
    firstName: `Dejan`,
    lastName: `Ivanovic`,
    year: 2,             // 1 - 5
    grades: [10, 10, 9, 10, 10, 10, 8, 8], 
};

let student6 = {
    firstName: `Milica`,
    lastName: `Mandic`,
    year: 5,             // 1 - 5
    grades: [10, 10, 10, 10, 10, 9, 10, 10], 
};

let students = [student1, student2, student3, student4, student5, student6];

// 1. Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.
console.log(`1) Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo.`);

function stampajStudenta(studenti, slovo) {
    studenti.forEach(student => {
        // if (slovo == student.firstName[0]) {
            // nije potrebno
        // }
        if (slovo == student.lastName[0]) {
            console.log(student.lastName);
            console.log(student.firstName);
        }
        
        
    });
}
stampajStudenta(students, `M`);

// 2. Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.
console.log(`2))))) Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string.`);

function stampajStudenta2(studenti, ime, prezime) {
    studenti.forEach(student => {
        let brIme = 0;
        let brPrezime = 0
        for (let i = 0; i < student.firstName.length; i++){
            if (student.firstName[i] == ime) {
                brIme++
            }
        }    
        for (let i = 0; i < student.lastName.length; i++) {
            if (student.lastName[i] == prezime) {
                brPrezime++
            }
        }          
        if (brIme > 0 && brPrezime > 0) {
            console.log(student.firstName);
            console.log(student.lastName);
        }
    });
}
stampajStudenta2(students,`a`,`k`);

// 3. Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
console.log(`3)))) Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.`);
function poslednjaGodina(studenti, godStud) {
    let broj = 0;
    studenti.forEach(s => {  
        if (s.year == godStud) {
            broj++
        }
    });
    return broj;
}

console.log(poslednjaGodina(students, 2));

// 4. Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta
console.log(`4)))Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta`);

function maxProsek(studenti) {
    let max = Number.MIN_SAFE_INTEGER;
    
    studenti.forEach(s => {
        let suma = 0;
        let broj = 0;
        s.grades.forEach(ocena => {
            suma += ocena;
            broj++;
        });
        avrgOcena = suma / broj;
        if (max < avrgOcena) {
            max = avrgOcena;
        }

    });
    studenti.forEach(s => {
        let suma = 0;
        let broj = 0;
        s.grades.forEach(ocena => {
            suma += ocena;
            broj++;
        });
        avrgOcena = suma / broj;
        if (max == avrgOcena) {
            
            console.log(s.firstName);
            console.log(s.lastName);
        }

    });

}
maxProsek(students);

// 5. Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
console.log(`Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.`);

function prosecanStudent(studenti) {
    studenti.forEach(s => {
        let broj = 0;
        s.grades.forEach(ocena => {
            
            if(ocena == 6 || ocena == 10) {
                broj++;
            }
            
        });
        if (broj == 0) {
            console.log(s.firstName);
            console.log(s.lastName);
        }
    });
}
prosecanStudent(students);

// 6. Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
console.log(`6))) Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.`);

function extraStudenti(studenti) {
    studenti.forEach(s => {
        let brLose = 0;
        s.grades.forEach(ocena => {
            if(ocena < 9) {
                brLose++;
            }
        });
        if (brLose == 0) {
            let br10 = 0;
            let br9 = 0;
            s.grades.forEach(ocena => {
                if (ocena == 10) {
                    br10++;
                } 
                else {
                    br9++;
                }                   
            });  
            if ((br10 / 2) > br9) {
                console.log(s.firstName);
                console.log(s.lastName);
            }
        }
    });

}
extraStudenti(students);

// 7. Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
console.log(`7)))) Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.`);

function kida(studenti) {
    studenti.forEach(s => {
        let brLose = 0;
        let br9 = 0;
        s.grades.forEach(ocena => {
            if (ocena <9) {
                brLose++;
                
            }
            if(ocena == 9) {
                br9++;
            }
        });
        if (brLose == 0) {
            console.log(br9);
            console.log(s.year);
            if (br9 < s.year) {
                console.log(s.firstName);
                console.log(s.lastName);
            }
        }
    });
}
kida(students);

// 8. Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
console.log(`8))) Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.`);

function razbija(studenti) {
    studenti.forEach(s => {
        let brLose = 0;
        let br10 = 0;
        s.grades.forEach(ocena => {
            if (ocena < 10) {
                brLose++;
            }
            if (ocena == 10) {
                br10++;
            }
        });
        console.log(`Lose ocene ${brLose}`);
        console.log(br10);
        if (brLose == 0 && br10 >= 5 && s.year > 1) {
            console.log(s.firstName);
            console.log(s.lastName);
        }
    });
}
razbija(students);

// 9. Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
console.log(`9))))) Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.`);

function aljkav(studenti) {
    studenti.forEach(s => {
        let brDobrih = 0;
        s.grades.forEach(ocena => {
            if (ocena > 7) {
                brDobrih++;
            }
        });
        if (brDobrih == 0) {
            console.log(s.firstName);
            console.log(s.lastName);
        }
    });
}
aljkav(students);

// 10. Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.
console.log(`10)))))    Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.`);

function bruka(student) {
    student.forEach(s => {
        let brDobrih = 0;
        let brojBruka = 0;
        s.grades.forEach(ocena => {
            if (ocena > 7) {
                brDobrih++;
            }
        });
        if (brDobrih == 0 && s.year > 1 && s.grades.length < 3) {
            console.log(s.firstName);
            console.log(s.lastName);
            brojBruka++;
        }
        console.log(brojBruka); 
    });
}
bruka(students);
// console.log(bruka(students));
import { Film } from "./film.js";

let film1 = new Film(`The Shawshank Redemption`, ` Frank Darabont`, 1994, [9, 8 , 8, 9, 10, 6, 6, 3]);
let film2 = new Film(`The Godfather`, `Francis Ford Coppola`, 1972, [10, 8 , 7, 9, 9, 7, 10]);
let film3 = new Film(`The Dark Knight`, `Christopher Nolan`, 2008, [10, 8 , 10, 9, 10, 10]);
let film4 = new Film(`The Lord of the Rings: The Return of the King`, ` Peter Jackson`, 2003, [7, 7 , 10, 10, 10, 6]);
let film5 = new Film(` Pulp Fiction`, ` Quentin Tarantino `, 1994, [9, 10, 10, 9, 6, 5]);



console.log(film1.ocene);
film2.stampaj();
console.log(film1.prosek(film1.ocene));

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let filmovi = [film1, film2, film3, film4, film5];

function prosecnaOcena(nizFilmova) {
    let prosecneOcene = [];
    nizFilmova.forEach(film => {
        prosecneOcene.push(film.prosek(film.ocene))
        
    });
    return prosecneOcene;
}

console.log(prosecnaOcena(filmovi));
// ime promenljive
let avrgScore = prosecnaOcena(filmovi);

// funkcija za maksimalnu prosecnu ocenu
let maxProsOcena = nizOcena => {
    let max = nizOcena[0];
    nizOcena.forEach(ocena => {
        if (max < ocena) {
            max = ocena;
        }
    });
    console.log(max);
    return max;
};
maxProsOcena(prosecnaOcena(filmovi));

// Naziv filma sa najboljom ocenom
let najFilm = (nizOcena, nizFilmova, maxOcena) => {
    let myIndex = ``;
    console.log(nizOcena);
    console.log(maxOcena);
    nizOcena.forEach((ocena, index) => {
        if (maxOcena == ocena) {
            myIndex = index;
            console.log(index);
        }
    });
    console.log(myIndex);
    nizFilmova[myIndex].stampaj();
};
najFilm(avrgScore, filmovi, maxProsOcena(avrgScore));

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
console.log(`Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku`);

function vekFilmova(niz, vek) {
    niz.forEach(film => {
        let myVek = ``;
        // console.log(film.godina);
        
        myVek = film.godina / 100;
        console.log(Math.ceil(myVek));
        myVek = Math.ceil(myVek);
        if (myVek == vek) {
            film.stampaj();
        }
        
    });
}

vekFilmova(filmovi, 20);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
console.log(avrgScore);

let osrednjiFilm = (nizProsOcena, nizFilmova ) =>{
    let prosecnaOcenaFilmova = ``;
    let suma = 0;
    let br = ``;
    nizProsOcena.forEach(film => {
        
        suma += film;
        br++;
    });
    console.log(suma);
    prosecnaOcenaFilmova = suma / br;
    console.log(prosecnaOcenaFilmova);

    //////////////////////////////
    let broj = Number.MAX_SAFE_INTEGER;
    nizProsOcena.forEach(film => {
        if (film > prosecnaOcenaFilmova) {
            
            if(broj > (film - prosecnaOcenaFilmova)){
                broj = film - prosecnaOcenaFilmova;
            }
        }
        else if(film < prosecnaOcenaFilmova) {
            if(broj > (prosecnaOcenaFilmova - film)){
                broj = prosecnaOcenaFilmova - film;
            }
        }
        else {
            broj = film;
        }
    });
    //////////////////////////////////////////
    // let brIndex = ``;
    nizProsOcena.forEach((ocena, index) => {
        let plus = ocena + broj;
        if (ocena + broj == prosecnaOcenaFilmova) {
            nizFilmova[index].stampaj();
        }
        if (ocena - broj == prosecnaOcenaFilmova) {
            nizFilmova[index].stampaj();
        }
    });
    console.log(broj);

};
osrednjiFilm(avrgScore, filmovi);

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
console.log(`Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.`);

function najmanjaOcenaNajboljeg(nizFilmova, nizOcena) {
    let maxNiz = nizOcena[0];
    // odredjivanje max niza 
    nizOcena.forEach(ocena => {
        if (maxNiz < ocena) {
            maxNiz = ocena;
        }
    });
    /////////////////////////
    // odredjivanje najbolje ocenjenog filma 
    let mojIndex = ``;
    nizOcena.forEach((ocena, index) => {
        if(ocena == maxNiz) {
            let filminjo = nizFilmova[index].ocene;
            let min = Number.MAX_SAFE_INTEGER;
            mojIndex = index;
            filminjo.forEach(score => {
                if(min > score) {
                    min = score;
                }
            });
            console.log(`Najbolje ocenjeni film je ${nizFilmova[mojIndex].naslov}, prosecnom ocenom ${maxNiz}, cija je najmanja ocena ${min}.`);
        }
    });

}
najmanjaOcenaNajboljeg(filmovi, avrgScore);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
console.log(`Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.`);

let najmanjaOcena = (nizFilmova) => {
    // prva petlja
    let min = Number.MAX_SAFE_INTEGER;
    nizFilmova.forEach(film => {
        
        film.ocene.forEach(ocena => {
            if(min > ocena) {
                min = ocena;
            }
        });
    });
    console.log(`Najmanja ocena koju ima neki film je ${min}.`);
};
najmanjaOcena(filmovi);

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
console.log(`Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.`);

function iznadOcene(ocena, nizFilmova) {
    // niz filmova
    nizFilmova.forEach(film => {
        if(film.prosek(film.ocene) >= ocena) {
            film.stampaj();
        }
    });
}

iznadOcene(9, filmovi);

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
console.log(`Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu`);
film1.prosek(film1.ocene);
console.log(film1.prosek(film1.ocene));
console.log(Math.round(film1.prosek(film1.ocene)));

let iznadOceneNoviji = (ocena, nizFilmova) => {
    // prva petlja
    // postavljanje maxGod
    let maxGod = 1800;
    nizFilmova.forEach(film => {
        if (Math.round(film.prosek(film.ocene)) == ocena) {
            if (maxGod < film.godina) {
                maxGod = film.godina;
            } 
        }
    });
    // ///////////////////////////
    // // provera maxGod-a i proseka ocena
    nizFilmova.forEach(film => {
        if(maxGod == film.godina && Math.round(film.prosek(film.ocene)) == ocena) {
            console.log(film);
        } 
    });  
};

iznadOceneNoviji(7, filmovi);


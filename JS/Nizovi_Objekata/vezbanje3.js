////// Zadatak – vremenska prognoza
// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

let day1 = {
    date: `2021/12/26`,
    rain: true,
    sunshine: false,
    cloudy: true,
    temp: [5, 7, 8, 10, 6, 5],
};

let day2 = {
    date: `2021/12/27`,
    rain: false,
    sunshine: false,
    cloudy: true,
    temp: [-7, -3, 0, 2, 8, 10, 6, 5],
};

let day3 = {
    date: `2021/12/28`,
    rain: false,
    sunshine: true,
    cloudy: false,
    temp: [0, 5, 7, 8, 10, 6, 5],
};

let day4 = {
    date: `2021/12/29`,
    rain: true,
    sunshine: true,
    cloudy: true,
    temp: [-3, 0, 2, 8, 10, 6],
};

let day5 = {
    date: `2021/12/30`,
    rain: false,
    sunshine: false,
    cloudy: false,
    temp: [-7, -3, 0, 2, 5],
};

let day6 = {
    date: `2021/12/31`,
    rain: false,
    sunshine: true,
    cloudy: true,
    temp: [-7, 8, 10, 6, 5],
};

let arrDays = [day1, day2, day3, day4, day5, day6];
// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
console.log(`Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:`);

// Ispisati prvi od njih
// Ispisati poslednji od njih

let merenjeTemp = niz => {
    // max broj merenja
    let max = Number.MIN_SAFE_INTEGER;
    console.log(max);
    niz.forEach(dan => {
        if (max < dan.temp.length) {
            max = dan.temp.length;
        }
    });
    console.log(max);
    // koliko max broj merenja ima
    let broj = 0;
    niz.forEach(dan => {
        if (max == dan.temp.length) {
            broj++
        }
    });
    console.log(broj);
    if (broj > 1) {
        let newBroj = 0;
        niz.forEach(dan => {
            if (max == dan.temp.length) {
                newBroj++;
                if (newBroj == 1) {
                    console.log(dan.date);
                }
                if (newBroj == broj) {
                    console.log(dan.date);
                }
            
            
            }
        });
    }
    else {
        niz.forEach(dan => {
            if (max == dan.temp.length) {
                console.log(dan.date);
            }
        });
    }


};
merenjeTemp(arrDays);
// let newbroj = 0;
// newbroj++;
// console.log(newbroj);

// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
console.log(`Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana`);

let daniVreme = (array, vreme) => {
    if (vreme == `kisa`) {
        let b = 0;
        array.forEach(dan => {
            if (dan.rain == true) {
                b++;
            }
        });
        console.log(b);
    }

    if (vreme == `oblacno`) {
        let b = 0;
        array.forEach(dan => {
            if (dan.cloudy == true) {
                b++;
            }
        });
        console.log(b);
    }

    if (vreme == `suncano`) {
        let b = 0;
        array.forEach(dan => {
            if (dan.sunshine == true) {
                b++;
            }
        });
        console.log(b);
    }

};

daniVreme(arrDays, 'oblacno');
// za kisne dane kao drugi parametar funkciji napisati kisa // suncano // oblacno

/////////////////////////////////////
// 3. Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
console.log(`Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom`);

let natTemp = niz => {
    let ukBroj = 0;
    let ukSuma = 0;
    niz.forEach(dan => {
        let suma = 0;
        let broj = 0;
        dan.temp.forEach(t => {
            suma += t;
            broj++;
        });
        ukBroj += broj;
        ukSuma += suma;
    });
    let avrgTemp = ukSuma / ukBroj;
    console.log(ukSuma);
    console.log(ukBroj);
    console.log(avrgTemp);
    /////////////////////
    // koliko dana
    // Broj dana sa natprosecnom temp b
    let b = 0;
    niz.forEach(dan => {
        let suma = 0;
        let broj = 0;
        dan.temp.forEach(t => {
            suma += t;
            broj++;
        });
        let avrgDan = suma / broj;
        
        if (avrgDan > avrgTemp) {
            b++;
        }
    });
    return b;
};

console.log(natTemp(arrDays));



// 1. Zadatak
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

function pozdrav(ime, prezime) {
    console.log(`Ime i prezime ovog korisnika je ${ime} ${prezime}.`);
}
pozdrav("Jelena", "Matejic");

// 2. Zadatak
// Napisati funkciju zbir koja računa zbir dva realna broja.


function zbir(n, m) {
    z = n + m;
    console.log(z);
}
zbir(2, 5);

// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racOperacije(znak, n, m) {
    let rezultat = 0;
    switch (znak) {
        case "+":
            rezultat = n + m;
            break;

        case "-":
            rezultat = n - m;
            break;

        case "*":
            rezultat = n * m;
            break;

        case "/":
            switch (m) {
                case 0:
                    rezultat = "Deljenje sa nulom nije moguce izvrsiti."  
                    break;
            
                default:
                    rezultat = n / m;
                    break;
            }
            
            break;
            
    
        default:
            rezultat = "Pogresan unos."
            break;
    }
    return rezultat;
}
console.log(racOperacije("/", 2, 1));

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

// function neparan(n) {
//     let rezultat = "";
//     if (n % 2 != 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
     
// }

// function neparan(n) {
//     let rezultat = true;
//     if (n % 2 == 0) {
//         rezultat = false;
//     }
//     return rezultat;
     
// }

function neparan(n) {
    return n % 2 != 0;
     
}


console.log(neparan(3));

// 4. Zadatak
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(n, m) {
    let max = n;
    if (max < m) {
        max = m;
    }
    return max;
}
let max2 = maks2(12, 15);
console.log(max2);

function maks4(n, m, o, p) {
    let rezultat = maks2(maks2(n, m), maks2(o, p));
    return rezultat;
}
let max4 = maks4(1, 22, 55, 7);
console.log(max4);
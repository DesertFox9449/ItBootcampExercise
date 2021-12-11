// 1.  Ispisati brojeve od 1 do 20:

// Svaki u istom redu

// let rez = "";
// let i = 1;
// while (i <= 20) {
//     rez = rez + i + " ";
//     // rez += i + " ";
//     i++;
// }
// console.log(rez);

// Svaki u novom redu

// let i = 1;

// while (i <= 20) {
//     console.log(i);
//     i++;
// }

// 2.  Ispisati brojeve od 20 do 1.

// let i = 20;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// u istom redu

// let i = 20;
// rez = "";
// while (i >= 1) {
//     rez = rez + i + " ";
//     i--;
// }
// console.log(rez);

// 3. Ispisati parne brojeve od 1 do 20.

// i = 1;
// while (i <= 20) {
//     if (i % 2 == 0){
//         console.log(i);
        
//     }
//     i++;
// }

// 6. Odrediti sumu brojeva od 1 do 100

// let i = 1;
// suma = 0;
// while (i <= 100) {
//     suma += i; // suma = suma + i;
//     i++;
// }
// console.log(suma);

// 7. Odrediti sumu brojeva od 1 do n
// let i = 1;
// let n = 100;
// suma = 0;

// while (i <= n) {
//     suma+=i;
//     i++;
    
// }
// console.log(suma);

// 8. Odrediti sumu brojeva od n do m
// let n = 4;
// let m = 3;
// let suma = 0;

// if (n != m){
//     i = m;
//     if (n > m) {
//         while (m <= n) {
//             suma += m;
//             m++;
//         }
//     }
//     else if (m > n) {
//         while (n <= m) {
//             suma += n;
//             n++;
//         }
//     }
    
// }
// else{
//     while (n == m) {
//         suma += n;
//         n++;
//     }
// }
// console.log(suma);

///////////////// Drugi nacin

// let n = 5;
// let m = 3;
// let suma = 0;
// let i = n;

// if (i <= m) {
//     while (i <= m) {
//         suma += i;
//         i++;
//     }
// }
// i = m;
// if (i <= n) {
//     while (i <= n) {
//         suma += i;
//         i++
//     }
// }

// console.log(`Suma brojeva od ${n} do ${m} je ${suma}.`);

// 9. Odrediti proizvod brojeva od n do m

// let n = 5;
// let m = 3;
// let p = 1;
// let i = n;

// if (i <= m) {
//     while (i <= m) {
//         p *= i;
//         i++;
//     }    
// }

// i = m;
// if (i <= n) {
//     while (i <= n) {
//         p *= i;
//         i++;
//     }
// }

// console.log(p);

// 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

// let n = 3;
// let m = 2;
// let suma = 0;
// let i = n;
// if (i <= m) {
//     while (i <= m) {
//         if(i % 2 == 0) {
//             suma += i**2;
//         }
//         else{
//             suma += i**3;
//         }
//         i++;    
//     }
// }
// i = m;
// if (i <= n){
//     while (i <= n) {
//         if(i % 2 == 0) {
//             suma += i**2;
//         }
//         else{
//             suma += i**3;
//         }
//         i++;
//     }
// }
// console.log(suma);

// 11.  Odrediti sa koliko brojeva je deljiv uneti broj k

// let k = 12;
// let i = 1;
// let broj = 0;
// while (i <= k) {
//     if (k % i == 0) {
//         broj++;
//     }
//     i++;
// }
// console.log(broj);

// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// let n = 4;
// let i = 1;
// let rez = 0;
// while (i <= n) {
//     if (n % i == 0) {
//         rez++;
//     }
    
//     i++;
// }
// if (rez <= 2 ) {
//     console.log(`Broj ${n} je prost.`);
// }
// else {
//     console.log(`Broj ${n} nije prost.`);
// }




// Za ucitani dvocifreni broj izdvojiti njegove cifre

// let b = 43;

// if (b >= 10 && b < 100) {
//     b1 = Math.floor((b / 10))
//     b2 = b % 10; 

//     console.log(`Cifre broja ${b} su ${b1} i ${b2}.`);   
// }


//  Ispisati brojeve od 1 do pet u WHILE petlji
// let n = 5;
// let i = 1;

// while (i <= n) {
//     console.log(i);
//     i++;
// }

// // For petlja
// n = 5;
// for (i = 1; n >= i; n--){
//     console.log(n);
// }

// 1. Ispisati brojeve od 20 do 1 

// for (let i = 1, n = 20; i <= n; i++) {
//     console.log(i);
    
// }

// 2. Ispisati brojeve od 20 do 1 

// for (let i = 20, n = 1; i >= n; i--) {
//     console.log(i);
// }

// 3. Ispisati parne brojeve od 1 do 20 

// for (let i = 1, n = 20; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15 *

// for (let i = 5, n = 15, b; i <= n; i++){
//     b = i*2;
//     console.log(b);
// }

// 5. Odrediti sumu brojeva od 1 do n
// let suma = 0;
// for (let i = 1, n = 5; i <= n; i++) {
//     suma = suma + i;
// }
// console.log(suma);

// 6. Odrediti sumu brojeva od n do m *

// let suma = 0;

// for(let n = 1, m = 5; n <= m; n++) {
//     suma = suma + n;
// }
// console.log(suma);

// 7. Odrediti proizvod brojeva od n do m

// let n = 2;
// let m = 4;
// let p = 1;

// for (let i = n; i <= m; i++){
//     p *= i;
// }
// console.log(p);

// 8. Odrediti sumu kvadrata brojeva od n do m *

// let n = 1;
// let m = 3;
// let s = 0;
// for(let i = n; i <= m; i++){
//     s += i**2;
// }
// console.log(s);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

// for (let i = 1; i <= 3; i++) {
    
//         document.body.innerHTML +=`<img src="slike/${i}.png">`;
   
// }

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

// let b1 = 20;
// let b2 = 100;
// let p = 1;
// for(b1, b2, p; b1 <= b2; b1++){
//     if (b1 % 11 == 0) {
//         p *= b1;
//     }
// }
// console.log(p);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

// let a = 5;
// let b = 150;
// let broj = 0;

// for(a, b, broj; a <= b; a++) {
//     if (a % 13 == 0) {
//         broj++;
//     }
// }
// console.log(broj);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.

// let n = 0;
// let m = 100;
// let suma = 0;
// let i = 0
// for(n, m, suma; n <= m; n++) {
//     suma += n;
//     i++;
// }
// let as = suma / i;
// console.log(as);

// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

// let n = 1;
// let m = 10;
// let iP = 0;
// let iN = 0;
// let i;
// for (i = n; i <= m; i++) {
//     if (i < 0) {
//         iN++;
//     }
    
//     else if (i > 0) {
//         iP++;
//     }
// }
// console.log(iP, iN);

// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

// let n = 5;
// let m = 10;
// let b = 0;
// for (n, m, b; n <= m; n++) {
//     if (n % 3 == 0 || n % 5 == 0) {
//         b++;
//     }
// }
// console.log(b);

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

// let n = 1;
// let m = 28;
// let suma = 0;
// let b = 0;
// let broj = "";
// for (let i = n; i <= m; i++) {
//     if (i % 10 == 4) {
//         suma += i;
//         b++;
//         broj +=i + " ";
//     }
// }
// console.log(`Brojevi od ${n} do ${m} kojima je poslednja cifra 4 daju sumu od ${suma} i ima ih ${b}.`);
// console.log(4 / 10);
// console.log(broj);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

// let n = 1;
// let m = 5;
// let a = 3;
// let suma = 0;
// for (let i = n; i <= m; i++) {
//     if(i % a != 0) {
//         suma += i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}. `);


// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

// let n = 1;
// let m = 9;
// let a = 3;
// let p = 1;
// for (let i = n; i <= m; i++) {
//     if (i % a == 0) {
//         p *= i;
//     }
// }
// console.log(p);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k

// let k = 12;
// let b = 0;
// for (let i = 1; i <= k; i++) {
//     if (k % i == 0) {
//         b++;
//     }
// }
// console.log(b);

// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// let n = 5;
// let s = 0
// if (n != 1) {
//     for (let i = 1; i <= n; i++) {
//         if(n % i == 0){
//             if (i == 1 || i == n) {
//                 s++;
//             }
//             else {
//                 s++;
//             }
//         }
//     }
//     if (s == 2) {
//         console.log(`Broj ${n} je prost.`);
//     }
//     else {
//         console.log(`Broj ${n} nije prost broj.`);
//     }
// }
// else {
//     console.log(`Broj ${n} nije prost broj.`);
// }


// 20. Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 



// Jelena




// 20.
// let tabela = `<table border="1">`;
// for(let red=1; red<=6; red++) {
//     if(red%2==0){
//         tabela += 
//         `
//         <tr class="roze">
//             <td>Tekst</td>
//             <td>Tekst</td>
//         </tr>
//         `;
//     }
//     else {
//         tabela += 
//         `
//         <tr>
//             <td>Tekst</td>
//             <td>Tekst</td>
//         </tr>
//         `;
//     }
// }
// tabela += `</table>`;
// document.body.innerHTML += tabela;

// 

//////////// VEZBA APROPO TABELE

// Napravi tabelu od 12 redova u kojoj je svaki prvi obojen u plavo a svaki drugi u crveno, treci zuto, cetvrti u roze
// svaki red ima 4 polja

// Pravimo promenljivu  t  u koju konkateniramo celu tabelu (+=)
// let t = `<table>`;
// let red = 32;
// for (let i = 1, color =""; i <= red; i++) {
//     if (i % 4 == 1){
//         color = "blue";
//         t += `
//         <tr style="background-color: ${color};">
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//         </tr>
//         `;
//     }
//     else if (i % 4 == 2) {
//         color = "red";
//         t += `
//         <tr style="background-color: ${color};">
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//         </tr>
//         `;
//     }
//     else if (i % 4 == 3) {
//         color = "yellow";
//         t += `
//         <tr style="background-color: ${color};">
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//         </tr>
//         `
//     }
//     else {
//         color = "pink";
//         t += `
//         <tr style="background-color: ${color};">
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//             <td>Text</td>
//         </tr>
//         `
//     }
// }
// t += `</table>`
// document.body.innerHTML += t;

// 21. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

// let li = 10;
// let lista = `<ul>`
// let color = `style="color: #B13F9A;"`
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 == 1) {
//         lista +=`
//         <li>Element ${i}</li>
//         `;
//     }
//     else if (i % 3 == 2) {
//         lista +=`
//         <li>Element ${i}   
//         `;
//     }
//     else {
//         lista += `
//             <ul >
//                 <li ${color}>Element ${i}</li>
//             </ul>
//         `;
//     }
// }
// lista += `</ul>`;
// document.body.innerHTML += lista;

// 22. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

// let div = 8;
// for (let i = 1; i <= div; i++) {
//     for (let i2 = 1, span = 8; i2 <= span; i2++){
//         document.body.innerHTML +=`<span>${i2}</span>`
//     }
// }
// let spanovi = ``;
// for (let i = 1, span = 64; i <= span; i++){
//         if(i % 8 == 1) {
//             spanovi +=`
//             <div>
//             <span style="border: 1px solid #000;">${i}</span>`;
//         }  
        
//         else if (i % 8 == 0) {
//             spanovi +=`
//             <span style="border: 1px solid #000;">${i}</span>
//             </div>`;

//         }
//         else {
//             spanovi +=`
//             <span style="border: 1px solid #000;">${i}</span>`;
//         }
// } 
// document.body.innerHTML += spanovi;   




//                            SAH   LAK NACIN



// let spanovi = ``;
// for (let i = 1, i2 = 1, div = 8; i2 <= div; i2++) {

//     if (i2 % 2 == 1) {

//         document.body.innerHTML += `
//         <div>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//         </div>
//         `;
        
//     }
//     else {
//         document.body.innerHTML += `
//         <div>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//             <span style="background-color: #000; color: #fff;">${i++}</span>
//             <span>${i++}</span>
//         </div>
//         `;
        
//     }
// }




//                           SAH - TEZI NACIN                 




//
// let c = 1;
// let div = 8;                     // 8 div-ova
// let span = 8;                    // 8 span-ova u jednom div-u 
// let conc = "";                   // promenljiva kontatenacija
// for (let i = 1; i <= div; i++){   // petlja za 8 div-ova
    
//     conc +=`
//             <div>
//             `;
//     if (i % 2 == 0){                          // pitamo da li je div parni
//         for (let i2 = c; i2 <= span; i2++) {  // petlja za 8 span-ova
//             if (i2 % 2 == 0) {                // pitamo da li je span paran broj 
//                 conc +=`
//             <span style="color: #fff; background-color: #000;">${i2}</span>
//             `;
//             }
//             else {                             // ako nije paran
//                 conc +=`
//             <span>${i2}</span>
//             `;
            
//             }
            
            
//         }
//     }
//     else {                                    // ako div nije paran
//         for (let i2 = c; i2 <= span; i2++) {  // petlja za 8 span-ova
//             if (i2 % 2 != 0) {                // pitamo da li je span neparan broj 
//                 conc +=`
//             <span style="color: #fff; background-color: #000;">${i2}</span>
//             `;
//             }
//             else {                             // ako je paran
//                 conc +=`
//             <span>${i2}</span>
//             `;
            
//             }
//         }
//     }
//     conc +=`
//             </div>
//             `;
//     c += 8;           // posle svakog ciklusa podizemo brojac za 8
//     span += 8;        // posle svakog ciklusa podizemo brojac za 8
                         // da se brojevi od 1-8 ne bi ponavljali 
// }
// document.body.innerHTML += conc;





//                         LEKARI




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

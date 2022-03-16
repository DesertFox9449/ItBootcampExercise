import Auto from "./auto.js";

let a1 = new Auto(`Ford`, `bela`, true);


console.log(a1);
console.log(typeof a1);

let a2 = new Auto(`Opel`, `crni`, true);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto(`Fiat Punto`, `bela`, false);

console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
a3.brojVrata = 5;

console.log(a3);

let a4 = new Auto(`         BMW`, `crvena`, false, 2);
a4._boja =  `roze`;
console.log(a4);

a1.sviraj();
a1.vozi(30);
console.log(a1);

let a5 = new Auto (`Fiat`,undefined , true, 3);
console.log(a5);

a1._marka = `       Audi`;
console.log(a1);
let a6 = new Auto(`   Audi A4`, `plava`, false, 3);
console.log(a6);

// metoda
// a1.postaviMarku(`       `);
// console.log(a1);


// console.log(a1.dohvatiMarku());

// seter nije obicna metoda
a1.marka = `         Audi A4`; //seter marka
console.log(a1.marka);         // geter marka
// pise se kao polje, a to je metoda

a1.brojVrata = 3;
console.log(a1.imaKrov);
console.log(a1.brojVrata);

a1.boja = `     `;
console.log(a1.boja);









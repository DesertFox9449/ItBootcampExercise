import { Pacijent } from "./pacijenti.js";

let p1 = new Pacijent(`Pera`, 200, 150);
let p2 = new Pacijent(`Zdera`, 180, 240);
let p3 = new Pacijent(`Nata`, 163, 60);
let p4 = new Pacijent(`Bojan`, 190, 80);
let p5 = new Pacijent(`Jasar`, 150, 30);
let p6 = new Pacijent(`Deus`, 180, 70);
let p7 = new Pacijent(`Jasar`, 120, 60);

let pacijenti = [p1, p2, p3, p4, p5, p6, p7];

p1.Bmi();
console.log(p1.Bmi());
console.log(p1.Kritican());
p5.ime = `Toza Vampir`;
console.log(p5.ime);

let najlaksiBTN = document.getElementById(`mrsavac`);
let najlaksiIspis = document.querySelector(`#mrsavacIspis`);

najlaksiBTN.addEventListener(`click`, () => {
    let min = pacijenti[0];
    pacijenti.forEach(p => {
        if(p._tezina < min._tezina) {
            min = p;
        }
    });
    najlaksiIspis.innerHTML = `
    <ul>
        <li>${min.ime}</li>
        <li>${min.visina}</li>
        <li>${min.tezina}</li>
    </ul>
    `;
});

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let najBMIbtn = document.getElementById(`gojazan`);
let najBMIIspis = document.querySelector(`#gojazan`);

najBMIbtn.addEventListener(`click`, () => {
    let maxBMI = pacijenti[0];
    pacijenti.forEach(p => {
        if(p.Bmi() > maxBMI.Bmi()){
            maxBMI = p;
        }
    });
    najBMIIspis.innerHTML = `
    <ul>
        <li>${maxBMI.ime}</li>
        <li>${maxBMI.visina}</li>
        <li>${maxBMI.tezina}</li>
    </ul>
    `;
});

// Ispisati sve pacijente čije ime sadrži slovo A.
console.log(`Ispisati sve pacijente čije ime sadrži slovo A.`);

let aBTN = document.getElementById(`a`);
let aIspis = document.querySelector(`#aIspis`);

aBTN.addEventListener(`click`, () => {
    let ul = `<ul>`
    pacijenti.forEach(p => {
        if(p.ime.includes(`a`)) {
            ul += `<li>${p.ime}</li>`;
        }
    });
    ul += `</ul>`;
    aIspis.innerHTML = ul;
});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
console.log(`Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.`);

function srednjaVisina(nizPac) {
    let sum = 0;
    let avrgH = 0;
    
    nizPac.forEach(pac => {
        sum += pac.visina;
        
    });
    return avrgH = sum / nizPac.length;
     

}   
console.log(`Prosecna visina pacijenta je ${srednjaVisina(pacijenti)}`); 

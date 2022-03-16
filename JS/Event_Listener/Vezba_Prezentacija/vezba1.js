/*
Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
*/

// button1
// let btnPlus = document.createElement(`button`);
// btnPlus.id = `plus`;
// let btnPlusText = document.createTextNode(`+`);
// btnPlus.appendChild(btnPlusText);
// document.body.appendChild(btnPlus);

// // span
// let spanRes = document.createElement(`span`);
// spanRes.id = `res`;
// spanRes.style.padding = `10px`;
// let spanResText = document.createTextNode(`1`);
// spanRes.appendChild(spanResText);
// document.body.insertBefore(spanRes, btnPlus);

// /*
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
// */
// // paragraf
// let pIspis = document.createElement(`p`);
// pIspis.id = `ispis`;
// document.body.appendChild(pIspis);


// // povezi
// // Event Listener na dugme
// let res = 1;
// btnPlus.addEventListener(`click`, () => {
    
//     // console.log(res);
//     pIspis.textContent = res;
//     res++;
//     // spanRes.innerText = res;
// });

// //////////////////////////////////////////
// // hr line
// document.body.appendChild(document.createElement(`hr`));
// /////////////////////////////////////////
/*
Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
*/
// naparavi dva dugmeta
// btnPlus
// let btnPlus = document.createElement(`button`);
// let btnPlusText = document.createTextNode(`+`);
// btnPlus.appendChild(btnPlusText);
// btnPlus.id = `plus`;

// // btnMinus
// let btnMinus = document.createElement(`button`);
// let btnMinusText = document.createTextNode(`-`);
// btnMinus.appendChild(btnMinusText);
// btnMinus.id = `minus`;

// // span
// let spanRes = document.createElement(`span`);
// let spanResText = document.createTextNode(`0`);
// spanRes.appendChild(spanResText);
// spanRes.id = `res`;
// spanRes.style.padding = `10px`;

// document.body.append(btnMinus, spanRes, btnPlus);

// // Povezivanje
// // Event listeneri na buttonima
// // btnMinus
// let res = 0;
// btnMinus.addEventListener(`click`, () => {
//     res--;
//     if (res % 2 == 0) {
//         spanRes.textContent = res;
//         spanRes.style.visibility = `visible`;
//     }
//     else {
//         // spanRes.textContent = ``;
//         spanRes.style.visibility = `hidden`;
//     }
//     if (res < 0) {
//         spanRes.style.color = `red`;
//     }
//     else if (res == 0) {
//         spanRes.style.color = `#000`;
//     }
// });

// // btnPlus
// btnPlus.addEventListener(`click`, () => {
//     res++;
//     if (res % 2 == 0) {
//         spanRes.textContent = res;
//         spanRes.style.visibility = `visible`;
//     }
//     else {
//         // spanRes.textContent = ``;
//         spanRes.style.visibility = `hidden`;
//     }
    
//     if (res > 0) {
//         spanRes.style.color = `green`;
//     }
//     else if (res == 0) {
//         spanRes.style.color = `#000`;
//     }
// });

//  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.


////////////////////////////////////////////////////////////////////////////
/* 
Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
*/

//input
let inputIme = document.createElement(`input`);
inputIme.id = `ime`;
inputIme.setAttribute(`type`, `text`);
inputIme.setAttribute(`placeholder`, `Upisi svoje ime`);

// dugme
let btnPoz = document.createElement(`button`);
btnPoz.append(document.createTextNode(`Zdravo`));
btnPoz.id = `poz`;

// paragraf
let pIspis = document.createElement(`p`);
pIspis.id = `ispis`;
let pIspisText = document.createTextNode(`1`);
pIspis.appendChild(pIspisText);
pIspis.style.visibility = `hidden`;

// prosledi elemente u DOM
document.body.append(inputIme, btnPoz, pIspis);

// Povezi
// na button ide EventListener
btnPoz.addEventListener(`click`, () => {
    let ispis = ``;
    if (inputIme.value.length == 0) {
        ispis = btnPoz.textContent;
    }
    else {
        ispis = `${btnPoz.textContent}, ${inputIme.value}!`;
    }
    pIspis.style.visibility = `visible`;
    pIspis.textContent = ispis;
});

/*
Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). 
Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.
*/
document.body.appendChild(document.createElement(`hr`));
let divTatko = document.createElement(`div`);
document.body.appendChild(divTatko);

// paragraf
let pRadio = document.createElement(`p`);
// let pRadioText = document.createTextNode(`Izaberite pol:`);
pRadio.appendChild(document.createTextNode(`Izaberite pol:`));
divTatko.appendChild(pRadio);

///////////////////////////////////////////////////////////////
//divM 
let divM = document.createElement(`div`);
divM.id = `maleDiv`;

// inputM
let inputM = document.createElement(`input`);
inputM.id = `maleInput`;
inputM.setAttribute(`type`, `radio`);
inputM.setAttribute(`name`, `gender`);
inputM.setAttribute(`value`, `male`);

// labelM
let labelM = document.createElement(`label`);
labelM.setAttribute(`for`, `maleInput`);
labelM.appendChild(document.createTextNode(`Male`));

//////Dodaj u DOM
divTatko.appendChild(divM);
divM.append(inputM, labelM);

//////////////////////////////////////////////////////////////
// divF 
let divF = document.createElement(`div`);
divF.id = `femaleDiv`;

// inputF
let inputF = document.createElement(`input`);
inputF.id = `femaleInput`;
inputF.setAttribute(`type`, `radio`);
inputF.setAttribute(`name`, `gender`);
inputF.setAttribute(`value`, `female`);

// labelF
let labelF = document.createElement(`label`);
labelF.setAttribute(`for`, `femaleInput`);
labelF.appendChild(document.createTextNode(`Female`));

//////Dodaj u DOM
divTatko.appendChild(divF);
divF.append(inputF, labelF);

/////////////////////////////////////////////////////////////////
// divNone
let divNone = document.createElement(`div`);
divNone.id = `NoneDiv`;

// inputNone
let inputNone = document.createElement(`input`);
inputNone.id = `noneInput`;
inputNone.setAttribute(`type`, `radio`);
inputNone.setAttribute(`name`, `gender`);
inputNone.setAttribute(`value`, `none`);

// labelNone
let labelNone = document.createElement(`label`);
labelNone.setAttribute(`for`, `noneInput`);
labelNone.appendChild(document.createTextNode(`None`));

//////Dodaj u DOM
divTatko.appendChild(divNone);
divNone.append(inputNone, labelNone);





// Novo dugme
let btnRadio = document.createElement(`button`);
btnRadio.appendChild(document.createTextNode(`Potvrdi`));
divTatko.appendChild(btnRadio);

// EventListener na novom dugmetu
let pol = ``;
// let inputi = document.querySelectorAll(`input[type=radio]`);
btnRadio.addEventListener(`dblclick`, () => {
    let myInput = document.querySelector(`input[name="gender"]:checked`);
    pol = myInput.value;
    
    console.log(pol);

});

///////////////////////////////////////////////////////////////////////////
/*
Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
*/

/////////////////////////// Prvi deo
// Kvadriraj ovaj broj:
// label + input + button
// let labelK = document.createElement(`label`);
// labelK.appendChild(document.createTextNode(`Kvadriraj ovaj broj:`));
// labelK.setAttribute(`for`, `inputK`);
// labelK.style.padding = `5px`;

// // input
// let inputK = document.createElement(`input`);
// inputK.setAttribute(`type`, `number`);
// inputK.setAttribute(`name`, `inputK`);
// inputK.setAttribute(`id`, `inputK`);

// // button
// let btnK = document.createElement(`button`);
// btnK.appendChild(document.createTextNode(`Izracunaj`));
// inputK.setAttribute(`id`, `btnK`);

// document.body.append(labelK, inputK, btnK);

// // EventListener
// let naTreci = ``;
// btnK.addEventListener(`click`, () => {
//     naTreci = inputK.value ** 3;
//     inputK.value = naTreci;
    
// });

// ///////////////////////////

// document.body.appendChild(document.createElement(`hr`));

// /////////////////////////// Drugi deo
// // Prepolovi ovaj broj:
// // label + input + button
// let labelPol = document.createElement(`label`);
// labelPol.appendChild(document.createTextNode(`Prepolovi ovaj broj:`));
// labelPol.setAttribute(`for`, `inputPol`);
// labelPol.style.padding = `5px`;

// // input
// let inputPol = document.createElement(`input`);
// inputPol.setAttribute(`type`, `number`);
// inputPol.setAttribute(`name`, `inputPol`);
// inputPol.setAttribute(`id`, `inputPol`);

// // button
// let btnPol = document.createElement(`button`);
// btnPol.appendChild(document.createTextNode(`Izracunaj`));
// inputK.setAttribute(`id`, `btnPol`);

// document.body.append(labelPol, inputPol, btnPol);

// // EventListener
// let polovina = ``;
// btnPol.addEventListener(`click`, () => {
//     polovina = inputPol.value / 2;
//     inputPol.value = polovina;
    
// });
// ///////////////////////////

// document.body.appendChild(document.createElement(`hr`));

// /////////////////////////// Treci deo
// // Izracunati povrsinu kruga za zadati poluprecnik:
// // label + input + button
// let labelPP = document.createElement(`label`);
// labelPP.appendChild(document.createTextNode(`Izracunati povrsinu kruga za zadati poluprecnik:`));
// labelPP.setAttribute(`for`, `inputPP`);
// labelPP.style.padding = `5px`;

// // input
// let inputPP = document.createElement(`input`);
// inputPP.setAttribute(`type`, `number`);
// inputPP.setAttribute(`name`, `inputPP`);
// inputPP.setAttribute(`id`, `inputPP`);

// // button
// let btnPP = document.createElement(`button`);
// btnPP.appendChild(document.createTextNode(`Izracunaj`));
// inputK.setAttribute(`id`, `btnPPl`);

// document.body.append(labelPP, inputPP, btnPP);

// // EventListener
// let povrsinaKruga = ``;
// let pi = 3.14;
// btnPP.addEventListener(`click`, () => {
//    povrsinaKruga = (inputPP.value ** 2) * pi;
//    inputPP.value = povrsinaKruga; 
    
// });

// ///////////////////////////

// document.body.appendChild(document.createElement(`hr`));

// ///////////////////////////

// let buttons = document.querySelectorAll(`button`);
// buttons.forEach(b => {
//     b.style.marginLeft = `5px`;
// });

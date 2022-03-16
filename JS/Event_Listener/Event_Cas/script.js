// napravi sav HTML kod preko JS-a
// paragraf
let p1 = document.createElement(`p`);
let p1Text = document.createTextNode(`Klikni ovde`);
p1.appendChild(p1Text);
console.log(p1);
p1.id = `klikni`;
document.body.appendChild(p1);

// 1. Dohvati HTML element koji zalis da postavis osluskivac
let pKlikni = document.getElementById(`klikni`);
console.log(pKlikni);

// 2. Postavljamo osluskivac
pKlikni.addEventListener(`click`, () => {
    console.log(`Jednom kliknuto na pragraf.`);
});

// napravi drugi paragraf
let p2 = document.createElement(`p`);
let p2Text = document.createTextNode(`Klikni ovde dva puta.`);
p2.appendChild(p2Text);
// Dodeli ID
p2.id = `dvaKlika`;
document.body.appendChild(p2);
// Dohvati element
let pKlikniDva = document.querySelector(`#dvaKlika`);
// Nacin 1
// pKlikniDva.addEventListener(`dblclick`, () => {
//     console.log(`Dva puta kliknuto na paragraf.`);
// });
// Nacin 2
p2.addEventListener(`dblclick`, () =>{
    console.log(`Kliknuto dva puta na paragraf.`);
});

// Pravi dugme
let b1 = document.createElement(`button`);
let b1Text = document.createTextNode(`+`);
b1.appendChild(b1Text);
document.body.appendChild(b1);
// add ID to button
b1.id = `plus`;

// Pravi span
let span1 = document.createElement(`span`);
let span1Text = document.createTextNode(`0`);
span1.appendChild(span1Text);
// add ID to span1
span1.id = `res`;
span1.style.padding = `20px`;

// Drugi nacin
// let span1 = document.createElement(`span`).appendChild(span1Text = document.createTextNode(`0`));
// console.log(span1.textContent);

// document.body.appendChild(span1);
document.body.insertBefore(span1, b1);

/////////////////////////////////////
// Hvatamo dugme
let btnPlus = document.getElementById(`plus`);
// kod mene je i b1, jer je pravljeno u JS-u

// Za konzolu

// Dodamo osluskivac 
// Dodamo promenljivu  res
// let res = 0;
// btnPlus.addEventListener(`click`, () => {
//     res++;
//     console.log(res);
// });

// Za dokument

// 
let res = 0;
// dodajemo novu promenljivu
let spanRes = document.getElementById(`res`);
btnPlus.addEventListener(`click`, () => {
    res++;
    
    spanRes.innerHTML = res;
    if (res > 0) {
        spanRes.style.color = `green`;
    }
    if (res == 0) {
        spanRes.style.color = `#000`;
    }
    
});

// Da dodamo minus dugme
// span nosi minus
let b2 = document.createElement(`button`);
// id za span
b1.id = `minus`;
// text Node za span
let b2Text = document.createTextNode(`-`);
b2.appendChild(b2Text);
// span1 ili spanRes // isto
document.body.insertBefore(b2, span1);

// Aktiviramo minus
// Event listener
// koristimo res iz prethodnog primera
// spanRes iz prethodnog primera
b2.addEventListener(`click`, () =>{
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = `red`;
    }
    if (res == 0) {
        spanRes.style.color = `#000`;
    }
    
});



////////////////////////////////////
// add <hr>

// Prvi nacin
// let hr1 = document.createElement(`hr`);
// document.body.appendChild(hr1);

// Drugi nacin
 document.body.appendChild(document.createElement(`hr`));
////////////////////////////////////

// Dodaj input
let input1 = document.createElement(`input`);
input1.setAttribute(`type`, `text`);
input1.setAttribute(`placeholder`, `Unesite ime`);
input1.id = `ime`;
document.body.appendChild(input1);

// Dodaj novi button
let btn3 = document.createElement(`button`);
btn3.id = `hello`;
let btn3Text = document.createTextNode(`Hello`);
btn3.appendChild(btn3Text);
document.body.appendChild(btn3);

// Dodaj novi paragraf
let p3 = document.createElement(`p`);
p3.id = `helloIspis`;
document.body.appendChild(p3);

// Treba nam Event Listener
let ispis = ``;
btn3.addEventListener(`click`, () => {
    if (input1.value.length == 0) {
        ispis = btn3.textContent;
    }
    else {
        ispis = `${btn3.textContent}, ${input1.value}!`;
    }
    
    p3.innerHTML = ispis;
});

// Jelenino
// let btnHello = document.getElementById(`hello`);
// let inputIme = document.getElementById(`ime`);
// let pHelloIspis = document.getElementById(`helloIspis`);

// btnHello.addEventListener(`click`, () => {
//     let inputImeValue = inputIme.value;
//     pHelloIspis.innerText = `Hello, ${inputImeValue}!`;
// });












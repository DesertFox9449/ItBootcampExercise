let i = 1;



let btn2 = document.querySelector(`#interval`);
console.log(btn2);
let go = null;
let ispis = document.getElementById(`ispis`);
console.log(ispis);

btn2.addEventListener(`click`, () => {
    btn2.classList.toggle(`mojBroj`);
    if(btn2.classList.contains(`mojBroj`)){
        if (go === null) {
            go = setInterval(function() {
                ispis.value++;
            }, 1000 / 2);
            btn2.innerHTML = `&#x23f8;`;
            
        }
    }
    else {
        clearInterval(go);
        go = null;
        btn2.innerHTML = `&#x23f5;`;
    }
    
    
});
let btn3 = document.getElementById(`stop`);
console.log(btn3);

btn3.addEventListener(`click`, () => {
    clearInterval(go);
    go = null;
    btn2.innerHTML = `&#x23f5;`;
    if(btn2.classList.contains(`mojBroj`)){
        btn2.classList.toggle(`mojBroj`);
    }
    
    
    
});

let btn4 = document.querySelector(`#reset`);
console.log(btn4);

btn4.addEventListener(`click`, () => {
    clearInterval(go);
    ispis.value = 0;
    go = null;
    btn2.innerHTML = `&#x23f5;`;
    if(btn2.classList.contains(`mojBroj`)){
        btn2.classList.toggle(`mojBroj`);
    }
    

});


//////////////////////////////////////
// set up timer
/////////////////////////////////////

// dohvati elemente iz HTML-a
// let btnPokreni = document.getElementById(`pokreni`);
// let btnPauziraj = document.getElementById(`pauziraj`);
// let btnResetuj = document.querySelector(`#resetuj`);
// // console.log(btnPokreni, btnResetuj, btnPauziraj);
// let inputDrugi = document.querySelector(`#drugi`);

// let kreni = null;

// btnPokreni.addEventListener(`click`, () => {
//     // togluj clasu
//     btnPokreni.classList.toggle(`myClass`);

//     if(btnPokreni.classList.contains(`myClass`)){
//         kreni = setInterval(() => {
//             // sati, minuti, sekunde
//             let datum = new Date();
//             let sati = datum.getHours();
//             let minuti = datum.getMinutes();
//             let sekunde = datum.getSeconds();
//             inputDrugi.value = `${sati}: ${minuti}: ${sekunde}`;
//         }, 1000);
//         btnPokreni.innerHTML = `&#x23f8;`
//     }
//     else {
//         clearInterval(kreni);
//         btnPokreni.innerHTML = `&#x23f5;`
//     }
    
// });

// function malaPauza() {
//     clearInterval(kreni);
// }

// btnPauziraj.addEventListener(`click`, malaPauza);



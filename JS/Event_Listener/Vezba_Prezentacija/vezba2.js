// Godina rodjenja / godina starosti

let inputGod = document.getElementById(`god`);
let btn = document.getElementById(`submit`);
let pGod = document.getElementById(`godP`);
let pPol = document.getElementById(`polP`);


// vadimo trenutno vreme
let datum = new Date();
let trenutnaGod = datum.getFullYear();
console.log(typeof trenutnaGod);
console.log(typeof inputGod);


// paserInt()

// EventListener na button
let starost = ``;
let pol = ``;
btn.addEventListener(`click`, (e) => {
    // starost
    e.preventDefault(); // da se
    starost = trenutnaGod - inputGod.value;
    pGod.textContent = `You are ${starost} years old.`;
    if (starost >= 18) {
        pGod.textContent += ` You are old.`;
        pGod.style.color = `gray`;
    }
    else {
        pGod.textContent += `You are too young.`;
        pGod.style.color = `pink`;
    }


    // pol
    pol = document.querySelector(`input[type="radio"]:checked`);
    
    if (pol.value == `male`) {
        pPol.textContent = `You are a ${pol.value}.`;
        pPol.style.color = `blue`;
    }
    else if (pol.value == `female`) {
        pPol.textContent = `You are a ${pol.value}.`;
        pPol.style.color = `red`;
    }
    else {
        pPol.textContent = `Your gender is ${pol.value}.`;
        pPol.style.color = `green`;
    }
});



// pol
// ispis
// crveni za zenski, plavi za muski, zeleni za none




// dugme


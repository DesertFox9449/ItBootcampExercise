///////////////////////// S T O P E R I C A ////////////////////////////////

// dohvati sve elemente koji ti trebaju
let input = document.getElementById(`ispis`);
let btnStartPause = document.getElementById(`playPause`);
let btnStop = document.querySelectorAll(`#stop`); // all query  JFF
btnStop = btnStop[0];
console.log(input, btnStartPause, btnStop);

let i = 1;

// varijabla sa vrednoscu NULL
let kreni = null;

// add event listener za startPause
btnStartPause.addEventListener(`click`, () => {
    // toggluj klasu
    btnStartPause.classList.toggle(`mojaKlasa`);
    // stavi varijablu da bude nosilac setInterval da bi mogao da je menjas
    // postavi uslov da bi moga da iskljucis tajmer
    if (btnStartPause.classList.contains(`mojaKlasa`)){
        kreni = setInterval(() => {
            // let datum = new Date();
            // let h = datum.getHours();
            // let min = datum.getMinutes();
            // let sec = datum.getSeconds();
            // input.value = `${h}:${min}:${sec}`;
            input.value = i++;
        }, 500);
        btnStartPause.innerHTML = `&#x23f8;`
    }
    else {
        clearInterval(kreni);
        btnStartPause.innerHTML = `&#x23f5;`
        
    }

});

// add event listener za stop
btnStop.addEventListener(`click`, () => {
    i = 0;
    input.value = i;
    clearInterval(kreni);
    btnStartPause.innerHTML = `&#x23f5;`
    btnStartPause.classList.toggle(`mojaKlasa`);
});

///////////////////// ToBeContinued  ///////////////////////



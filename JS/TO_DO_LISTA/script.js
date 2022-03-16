// let arrayLi = document.querySelectorAll(`li`);

// arrayLi.forEach(li => {
//     li.addEventListener(`click`, () => {
//         if(li.style.textDecoration != `line-through`) {
//             li.style.textDecoration = `line-through`;
//         }
//         else {
//             li.style.textDecoration = `none`;
//         }
//     })
// });

// hvataj elemente iz DOM-a
let inputText = document.getElementById(`input`);
let inputSubmit = document.getElementById(`submit`);

let ul = document.querySelector(`ul`);
console.log(ul);



// add event listener
inputSubmit.addEventListener(`click`, (event) => {
    event.preventDefault()


    let inputRadio = document.querySelector(`input[type="radio"]:checked`);
    //
    inputTextValue = inputText.value;
    inputRadioValue = inputRadio.value;
    console.log(inputRadioValue);

    let li = document.createElement(`li`);
    li.innerText = inputTextValue;
    if(inputRadioValue == `start`) {
        ul.prepend(li);
        
    }
    else {
        ul.appendChild(li);
    }
    inputText.value = null;
});

// add event listener

ul.addEventListener(`click`, (event) => {
    console.log(event);
    console.log(event.target);
    if(event.target.tagName == `LI`) {
        event.target.remove();
    }
});

// DOM
let input = document.getElementById(`password`);
let write = document.getElementById(`write`);
let btnSubmit = document.getElementById(`submit`);

// array
const passwordArray = [];
const letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

// eventListener
btnSubmit.addEventListener(`click`, (event) => {
  event.preventDefault();
  Number(input.value) >= 4
    ? passwordGenerator(input.value)
    : alert(`Length has to be at least four caracters long`);
});

function passwordGenerator(passwordLength) {
  // petlja
  for (let i = 1; i <= passwordLength; i++) {
    // broj ili slovo
    let slovoBroj = randomGenerator(2);
    if (slovoBroj === 1) {
      // jedan je broj
      pushToArray(randomGenerator(10));
    } else {
      // nula je slovo
      pushToArray(letters[randomGenerator(letters.length)]);
    }
  }
  console.table(passwordArray);
  write.textContent = passwordArray.join(``);
  passwordArray.length = 0;
}
function randomGenerator(number) {
  return Math.trunc(Math.random() * number);
}

function pushToArray(value) {
  passwordArray.push(value);
}


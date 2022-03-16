let ikea = (url) => {
    let request = new XMLHttpRequest()
    request.open(`GET`, url);
    request.send();
    return new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if(request.readyState == 4 && request.status == 200) {
                resolve(JSON.parse(request.responseText));
            }
            else if(request.readyState == 4) {
                reject(`Doslo je do greske`);
            }
        })
        
    });
}



let form1 = document.getElementById(`one`);
let inputTezina = document.querySelector(`#kamion`);
let inputSub1 = document.getElementById(`sendOne`);
console.log(form1, inputTezina, inputSub1);
let divOne = document.getElementById(`divOne`);

// form1.addEventListener(`submit`, (e) => {
//     e.preventDefault();

// //     // niz za stock koji fali
//     let emptyStock = [];
//     let totalWeight = 0;
//         // Dohvati stock
//     ikea(`./JSON/stock.json`)
//     .then((data) => {
//         console.log(data);
//         data.forEach(element => {
//             if(element.stock < 1) {
//                 emptyStock.push(element.item);
//             }
//         });
//         // imamo niz stock-ova koji fale
//         console.log(emptyStock);

//         // sad nam treba tezina tih proizvoda
//         // hvatamo weight JSON
//         return ikea(`./JSON/weights.json`); 
//     })
//     .then((data) => {
//         // proveravamo da li radi
//         console.log(data);
//         // idemo petljom da uzmemo vrednosti tezine
//         // za item-e koji nam fale

//         // pravimo promenljivu za ukupnu tezinu
//         // let totalWeight = 0;
//         data.forEach(element => {
//             if(emptyStock.includes(element.item)){
//                 totalWeight += element.weight;
//             }
//         });
//         // proverimo totalnu tezinu
//         console.log(totalWeight);

//         // hvatamo vrednost inputa koji oznacava nosivost kamiona
//         // napravi promenljivu za paragraf
//         let p = document.createElement(`p`);
//         divOne.appendChild(p);
//         p.style.color = `red`;
//         let nosivost = inputTezina.value;
//         console.log(totalWeight);
//         if(nosivost < totalWeight) {
            
//             p.innerHTML = `Not enought capacity in the truck!!!`;
//         }
//         else {
//             // p.innerHTML = `Treba naruciti artikle u vrednosti od: ${suma} din.`;
//             return ikea(`./JSON/prices.json`);
//         }
        
        
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(totalWeight);
//         // sabrati cene narucenih itema
//         let suma = 0;
//         data.forEach(element => {
//             if(emptyStock.includes(element.item)){
//                 suma += element.price;
//             }
//         });
//         console.log(suma);

//         let p = document.createElement(`p`);
//         divOne.appendChild(p);
//         p.style.color = `green`;
//         p.innerHTML = `Treba naruciti artikle u vrednosti od: ${suma} din.`;

//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

///////////////////////////////////////////////////////////
// izvuci elemente
let formTwo = document.getElementById(`two`);
let inputText = document.querySelector(`#naziv`);
let inputMin = document.getElementById(`pocetnaCena`);
let inputMax = document.querySelector(`#krajnjaCena`);
let inputSubTwo = document.getElementById(`sendTwo`);
let ul = document.querySelector(`#ul`);

formTwo.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let nizNaStanju = [];
    let inputTextValue = inputText.value;
    let min = inputMin.value;
    let max = inputMax.value;
    
    console.log(min, max);
    ikea(`./JSON/stock.json`)
    .then((data) => {
        console.log(data);
        data.forEach(element => {
            if(element.stock > 0) {
                nizNaStanju.push(element.item);
            }
        });
        console.log(nizNaStanju);
        return ikea(`./JSON/prices.json`)
    })
    .then((data) => {
        console.log(data);
        data.forEach(element => {
            
            // if(element.price < max) {
            //     console.log(element.price);
            // }
            if(element.price > min && element.price < max && nizNaStanju.includes(inputTextValue)) {
                console.log(`hello`);
                let li = document.createElement(`li`);
                ul.appendChild(li);
                li.innerHTML = element.item;
            }
        });
    })
    .catch((err) => {
        console.log(err);
    })

})



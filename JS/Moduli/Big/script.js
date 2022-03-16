// let slika = document.createElement(`img`);
// slika.setAttribute(`src`, `Slike/1.jpg`);
// document.body.appendChild(slika);
// import generateImage from "./Veliki_moduli/general.js";

// import { generateItem as generateListItem, generateList } from "./Veliki_moduli/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem} from "./Veliki_moduli/table.js";


// for (let i = 1; i <= 3; i++) {
//     generateListItem(generateList(), generateImage(`Slike/${i}.jpg`));
// }

// generateListItem(generateList(), generateImage());





// generateTableItem(generateTableRow(generateTable()), generateImage());

// Nacin sa objektima

import generateImage from "./Veliki_moduli/general.js";
import * as List from "./Veliki_moduli/list.js"
import * as Table from "./Veliki_moduli/table.js"

console.log(List);
List.generateItem(List.generateList(), generateImage());
console.log(Table);
Table.generateItem(Table.generateTableRow(Table.generateTable()), generateImage());

import * as Div from "./Veliki_moduli/div.js";

console.log(Div);
let ojsa = Div.divParent();
Div.divItem(ojsa, ("Slike/1.jpg"));
Div.divItem(Div.divParent(), ("Slike/2.jpg"));
Div.divItem(Div.divParent(), ("Slike/3.jpg"));


// List.generateListItem(generateList(), generateImage());


// import generateImage from "./general.js";

// function generateDiv(parent){
//     let div = document.createElement('div');
//     div.style.overflow = "hidden"
//     parent.appendChild(div);
//     return div
// }


// function generateDivItem( parent, src){
//     let div = document.createElement('div');
//     div.style.float = "right";
//     let img = generateImage(src);
//     div.appendChild(img)
//     parent.appendChild(div);
//     return div;

// }

// export {generateDiv, generateDivItem}
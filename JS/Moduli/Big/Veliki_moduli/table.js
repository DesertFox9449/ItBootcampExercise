
function generateTable() {
    let table = document.createElement(`table`);
    document.body.appendChild(table);
    return table;
}

function generateTableRow(parent) {
    let tr = document.createElement(`tr`);
    parent.appendChild(tr);
    return tr;
}

// function generateTableItem(parent, img) {
//     let td;
//     for(let i = 1; i <= 3; i++){
//         td = document.createElement(`td`);
        
//         parent.appendChild(td);
//         td.appendChild(img);
//         img.setAttribute(`src`, `Slike/${i}.jpg`);
//         td.innerHTML += ` `;
        
//     }
     
// }

function generateItem(parent, img) {
        
        for(let i = 1; i <= 3; i++){
            
            let td = document.createElement(`td`);
            
            parent.appendChild(td);
            td.appendChild(img);
            img.setAttribute(`src`, `Slike/${i}.jpg`);
            // td.innerHTML += ` `;
            
        }
         
    }
export {generateTable, generateTableRow, generateItem};
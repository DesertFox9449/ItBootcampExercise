import generateImage from "./general.js";

function generateList() {
    let ul = document.createElement(`ul`);
    document.body.appendChild(ul);
    return ul;
}

// function generateListItem(parent, img) {
    
//     let li;
//     for (let i = 1; i <= 3; i++) {
        
//         li = document.createElement(`li`);
//         li.style.listStyleType = `none`;
//         li.style.display = `inline-block`;
//         parent.appendChild(li);
//         li.appendChild(img);
        
//         img.setAttribute(`src`, `Slike/${i}.jpg`);
//         li.innerHTML += ` `;
        
        
//     }

    
// }

function generateItem(parent, img) {
    
        let li;
        for (let i = 1; i <= 3; i++) {
            
            li = document.createElement(`li`);
            li.style.listStyleType = `none`;
            li.style.display = `inline-block`;
            parent.appendChild(li);
            li.appendChild(img);
            
            img.setAttribute(`src`, `Slike/${i}.jpg`);
            li.innerHTML += ` `;
            
            
        }
    
        
    }

export {generateList, generateItem};
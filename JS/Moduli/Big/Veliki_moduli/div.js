let parent = document.body;
function divParent() {
    let div = document.createElement(`div`);
    div.style.overflow = `hidden`;
    document.body.appendChild(div);
    return div;
}

function divItem(parentDiv, src) {
    let div = document.createElement(`div`);
    div.style.float = `right`;
    div.style.width = `300px`;
    parentDiv.appendChild(div);
    let img = document.createElement(`img`);
    img.setAttribute(`src`, `${src}`);
    img.style.width = `300px`;
    console.log(img);
    
    div.appendChild(img);
    
    
}

export {parent, divParent, divItem};
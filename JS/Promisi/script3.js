

let getTodos = (resource) => {
    // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. open
    request.open(`GET`, resource);

    // 3. send
    request.send();

    let p = new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if(request.readyState == 4 & request.status == 200) {
                // sve OK
                
                resolve(request.responseText)
            }
            else if (request.readyState == 4) {
                // greska
                
                reject(`Doslo je do greske`);
            }
        });
        
    });
    return p;
}
getTodos(`./JSON/todos.json`).then(data => {
    console.log(`Promise todos resolved ${data}`);
    return getTodos(`./JSON/fruits.json`);
}).then(data => {
    console.log(data);
    return getTodos(`./JSON/vegetable.json`);
}).then(data => {
    console.log(data);
})
.catch(err => {
    console.log(`Promise todos rejected ${err}`);
})

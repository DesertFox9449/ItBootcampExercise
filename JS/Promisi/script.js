

let getTodos = (resource, callback) => {
    // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. open
    request.open(`GET`, resource);

    // 3. send
    request.send();

    request.addEventListener(`readystatechange`, () => {
    if(request.readyState == 4 & request.status == 200) {
        // sve OK
        
        callback(request.responseText, undefined);
    }
    else if (request.readyState == 4) {
        // greska
        
        callback(undefined, `Doslo je do greske`);
    }
});


}
getTodos(`./JSON/todos.json`, (data, err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
        getTodos(`./JSON/fruits.json`, (data, err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(data);
                getTodos(`./JSON/vegetable.json`, (data, err) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log(data);
                    }
                })
            }
        });
    }
});

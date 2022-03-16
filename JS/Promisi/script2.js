let getSomething = (url, callback) => {

    let obj = new Promise((resolve, reject) => {
        // resolve(`Sve je OK.`);
        // reject(`Doslo je do greske.`);
    });
    return obj; // vraca Promise objekat

    // let request = new XMLHttpRequest();
    // request.open(`GET`, ``);

    // send();

}

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
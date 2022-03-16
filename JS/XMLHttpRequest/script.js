// const mojZahtev = new XMLHttpRequest();

// mojZahtev.addEventListener(`readystatechange`, () => {
    
//     if(mojZahtev.readyState === 4 && mojZahtev.status === 200) {
//         let data = JSON.parse(mojZahtev.responseText);
//         console.log(data);
//     }
//     else if (mojZahtev.readyState === 4) {
//         console.log(`There is a mistake.`);
//     }
// });

// mojZahtev.open(`GET`, `https://jsonplaceholder.typicode.com/posts`);
// mojZahtev.send();

const request1 = new XMLHttpRequest();

request1.addEventListener(`readystatechange`, () => {
    if(request1.readyState == 4 && request1.status == 200) {
        let data = JSON.parse(request1.responseText);
        console.log(data);
        // Ispisati u konzoli one korisnike čiji website ima domen „.com“.
        console.log(`1) Ispisati u konzoli one korisnike čiji website ima domen „.com“.`);
        data.forEach(user => {
            if(user.website.includes(`.com`)){
                console.log(user.name);
            }
        });
    }
    else if(request1.readyState == 4) {
        console.log(`There has a been an error.`);
    }
});
request1.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request1.send();

const request2 = new XMLHttpRequest();

request2.addEventListener(`readystatechange`, function() {
    if(this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(`2) Ispisati korisnike čije ime sadrži reč „Clementin“`);

        data.forEach(user => {
            if(user.name.includes(`Clementin`)){
                console.log(user.name);
            }
        });
    } 
    else if (this.readyState == 4) {
        console.log(`There was a mistake.`);
    }
});

request2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request2.send();

const request3 = new XMLHttpRequest();

request3.addEventListener(`readystatechange`, () => {
    if(request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText);
        //Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
        console.log(`3)   Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.`);

        data.forEach(user => {
            if(user.company.name.includes(`Group`) || user.company.name.includes(`LLC`)){
                console.log(user.name);
            }
        });
    }
    else if(request3.readyState == 4) {
        console.log(`There has been a mistake.`);
    }
});

request3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request3.send();


const request4 = new XMLHttpRequest();

request4.addEventListener(`readystatechange`, function() {
    if(this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        // Ispisati sve različite gradove u kojima rade ovi korisnici.
        console.log(`4)   Ispisati sve različite gradove u kojima rade ovi korisnici.`);

        let city = [];
        data.forEach(user => {
            
            if(!city.includes(user.address.city)){
                city.push(user.address.city);
            }
        });
        console.log(city);
    }
    else if (this.readyState == 4) {
        console.log(`There is a mistake.`);
    }
});

request4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request4.send();


const request5 = new XMLHttpRequest();

request5.addEventListener(`readystatechange`, () => {
    if(request5.readyState == 4 && request5.status == 200) {
        let data = JSON.parse(request5.responseText);
        // Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
        console.log(`5)    Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.`);

        let brojKorisnika = 0;
        data.forEach(user => {
            
            if(user.address.geo.lat < 0 && user.address.geo.lng < 0) {
                brojKorisnika++;
            }
        });
        console.log(brojKorisnika);
    }
    else if(request5.readyState == 4) {
        console.log(`There has been a mistake.`);
    }
});

request5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request5.send();
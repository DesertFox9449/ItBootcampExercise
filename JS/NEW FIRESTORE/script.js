console.log(db);
console.log(db.collection(`users`).doc(`user`));

let customers = db.collection(`customers`);
let doc1 = customers.doc(`customer1`);
console.log(doc1);

// lancanje poziva

let doc2 = db.collection(`tasks`).doc(`task1`);
console.log(doc2);

/*
Za pristup dokumentu
db.collection().doc()

CRUD (Create, Read, Update, Delete)
Create : doc.set()
Read   : doc.get()
Update : doc.update()
Delete : doc.delete()

// CRUD Vracaju promise
// resolve(), reject()
*/

let obj = {
    name: "Vesanka",
    age: 22,
    addresses: [`Pirot`, `Nis`],
    salary: 470.00
};

// db.collection(`customers` )
// .doc(`customer15`)
// .set(obj)
// .then(() => {
//     console.log(`Sve je proslo kako treba.`);
//     return db.collection(`customers` )
//     .doc(`customer15`)
//     .set({
//         height: 180
//     },{
//         merge: true
//     })
    
// })
// .then(() => {
//     console.log(`Spojen dokument.`);
// })
// .catch((err) =>{
//     console.log(`Nije sve proslo kako treba ${err}`);
// });



// console.log(`Test poruka`);

/////////////////////////////////////////
// dodavanje novog taska

/*
let datum1 = new Date(`2022-01-30 19:00:00`);
let datum2 = new Date(`2022-01-30 21:00:00`);

// Add new document in colection "tasks"
db.collection(`tasks`)
.doc(`task10`)
.set({
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: true,
    description: `Pici Perice!`
}, {merge: true})
.then(function(){
    console.log(`Sve je superiska.`);
    return db.collection(`tasks`)
    .doc(`task10`)
    .update({
        description: `Pici, Perice, ako mozes.`
    })
    .then(() => {
        console.log(`Preica je spicio kuci`);
    })
})
.catch((err) => {
    console.log(`Nije superiska.`);
});

//////////////////// D E L E T E ////////////////////////////////


db.collection(`tasks`)
.doc(`M6S6Mb4RLS4Tj4CFqSAH`)
.delete()
.then(() => {
    console.log(`Everything is fine, b i a c h`);
})
.catch((err) => {
    console.log(`Everything is not fine, b i a c h`);
});

*/

let film1 = {
    name: `ja`,
    director: {
        first_name: `Pera`,
        last_name: `Peric`
    },
    release_year: 2000,
    genres: [`Comedy`, `Crime`, `Kids`],
    rating: 7.8

};

let film2 = {
    name: `ti`,
    director: {
        first_name: `Zika`,
        last_name: `Zikic`
    },
    release_year: 1994,
    genres: [`Comedy`, `Kids`],
    rating: 5.6

};

let film3 = {
    name: `on`,
    director: {
        first_name: `Mika`,
        last_name: `Mikic`
    },
    release_year: 1999,
    genres: [`Comedy`, `Kids`, `Horror`],
    rating: 3.2

};

let film4 = {
    name: `ona`,
    director: {
        first_name: `Persa`,
        last_name: `Persic`
    },
    release_year: 1980,
    genres: [`Drama`, `History`],
    rating: 8.2

};

let film5 = {
    name: `ono`,
    director: {
        first_name: `Seka`,
        last_name: `Persa`
    },
    release_year: 1985,
    genres: [`Future`, `Fantacy`],
    rating: 8.2

};

let films = [film1, film2, film3, film4, film5];
let niz = [1, 2, 3, 4, 10, 5, 6];

console.log(typeof films);
// let i = 6;
// films.forEach(film => {
//     db.collection(`movies`)
//     .doc(`movie${i++}`)
//     .set(film)
//     .then(() => {
//         console.log(`Sve je bas bajno`);
//     })
//     .catch((err) => {
//         console.log(`Sve je bas sjajno, NOT ${err}`);
//     });
// });
// for petlja
// let b = 0;
// for(let i = 1; i < (films.length + 1); i++) {
//     db.collection(`movies`)
//     .doc(`movie${i}`)
//     .set(films[i - 1])
//     .then(() => {
//         console.log(`Idemo,Cirko!!!`);
//     })
//     .catch(() => {
//         console.log(`Djes poso mali?`);
//     });
// }

// Menja podatke o nekim filmovima u bazi,
// db.collection(`movies`)
// .doc(`movie1`)
// .update({
//     director: {
//         first_name: `Mura`,
//         last_name: `Muric`
//     }
// })
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// Dodaje žanr nekom filmu,
// db.collection(`movies`)
// .doc(`movie2`)
// .set({
//     genres: [`History`, `Classics`]
// }, {merge: true})
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// Dodaje žanr nekom filmu,
// db.collection(`movies`)
// .doc(`movie2`)
// .update({
//     genres: firebase.firestore.FieldValue.arrayUnion(`Comedy`)
// })
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// Za brisanje elementa niza koje je polje dokumenta:
// db.collection(`movies`)
// .doc(`movie2`)
// .update({
//     genres: firebase.firestore.FieldValue.arrayRemove(`Comedy`)
// })
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// Za menjanje polja objekta koje je polje dokumenta:

// db.collection(`movies`)
// .doc(`movie4`)
// .update({
//     "director.first_name": "Pera"
// })
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// db.collection(`movies`)
// .doc(`movie8`)
// .update({
//     "director.first.name": "Yollo"
// })
// .then(() => {
//     console.log(`Mission successfull`);
// })
// .catch(() => {
//     console.log(`Mission NOT so successfull`);
// });

// db.collection(`movies`)
// .doc(`movie8`)
// .delete({
//     "director.first.name": "Yollo"
// })
// .then()
// .catch();

/*

db.doc("movies/movie1")
.update({
    genres: firebase.firestore.FieldValue.arrayRemove(`Kids`)
})

db.doc("movies/movie1")
.update({
    "director.last_name": firebase.firestore.FieldValue.delete()
})

db.doc(`movies/movie10`)
.update({
    "director.first_name": firebase.firestore.FieldValue.delete()
})

db.doc(`movies/movie10`)
.update({
    "director.first_name": "Sekica",
    "director.last_name": "Persica"
})

db.doc(`movies/movie4`)
.update({
    genres: firebase.firestore.FieldValue.arrayUnion(`Romance`)
    
})

db.doc(`movies/movie4`)
.update({
    genres: firebase.firestore.FieldValue.delete(),
    rating: firebase.firestore.FieldValue.delete(),
    name: firebase.firestore.KeyValue.update(`Ime`),
    
    
    "director.last_name": "Mala",
    "director.first_name": "Mica"

    
})
*/
////////////////////////////////////////////////////

// T O   B E   C O N T I N U E D . . . 

////////////////////////////////////////////////////
// jedan document kolekcije
/*

let c1 = db.collection(`customers`).doc(`customer5`);
c1.get()
.then(function(doc) {
    if(doc.exists) {
        console.log(doc);
    }
    else {
        console.log(`There's no such document.`);
    }
    
})
.catch(err => {
    console.log(`There has been a mistake, ${err}`);
});

// svi dokumenti kolekcije
db.collection(`users`)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, doc.data());
    });
})
.catch((err) => {
    console.log(`There has been a mistake, ${err}`);
});

// orderBy metoda

db.collection(`users`)
.orderBy(`name`, "desc")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log(`There has been a mistake, ${err}`);
});


//////////////////////////////////
// limit()

db.collection(`movies`)
.orderBy(`name`, 'desc')
.limit(10)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.data().name);
    });
})
.catch((err) => {
    console.log(`There has been a mistake, ${err}`);
});
*/

// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
/*
db.collection(`customers`)
.orderBy(`name`, `desc`)
.limit(5)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach(document => {
        document = document.data();
        console.log(document.name);
    });
})
.catch(() => {
    console.log(`Nije dobro!`);
});

// Iz kolekcije customers, pročitati sve klijente koji:

// Imaju adresu u Nišu,

db.collection(`customers`)
.where(`addresses`, `array-contains`, `Nis`)
.get()
.then(querySnapshot => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(document => {
            document = document.data();
            console.log(document.name);
        });
    }
    else {
        console.log(`The List is empty`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske ${err}`);
});

// Imaju platu veću ili jednaku od 50000,
db.collection(`customers`)
.where(`salary`, `>=`, 50000)
.get()
.then(querySnapshot => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(document => {
            document = document.data();
            console.log(document.name, document.salary);
           
        });
    }
    else {
        console.log(`The List is empty`);
        
    }
})
.catch((err) => {
    console.log(`Doslo je do greske ${err}`);
    
});


//  Imaju platu između 300 i 800,
db.collection(`customers`)
.where(`salary`, `>`, 30000)
.where(`salary`, `<`, 80000)
.get()
.then(querySnapshot => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.name, doc.salary);
        });
    }
})
.catch(err => {
    console.log(`Doslo je do greske.`);
})


// Imaju platu manju od 900, i imaju 30 godina,
db.collection(`customers`)
.where(`salary`, `<`, 110000)
.where(`age` , `==`, 30)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.name, doc.age, doc.salary);
        });
    }
    else {
        console.log(`The List is empty`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});

// Imaju adresu u Nišu ili Beogradu,
db.collection(`customers`)
.where(`addresses`, `array-contains-any`, [`Nis`, `Beograd`])
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.name,doc.addresses);
        });
    }
    else {
        console.log(`Lista je prazna.`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});

// Imaju 22, 25 ili 28 godina.
db.collection(`customers`)
.where(`age`, `in`, [22, 25, 28])

.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.name, doc.age);
        });
    }
    else {
        console.log(`Niz je prazan, prike!`);
    }
})
.catch((err) => {

});


// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

db.collection(`tasks`)
.orderBy(`title`, `desc`)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.title);
        });
    }
    else {
        console.log(`Niz je prazan.`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, Milorde, ${err}`);
});

// Su prioritetni,
db.collection(`tasks`)
.where(`priority`, `==`, true)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.title, doc.priority);
        });
    }
    else {
        console.log(`Niz je prazan :( `);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});

// Treba da se izvrše u tekućoj godini,
let pocGodine = new Date(`2022-01-01`);
let krajGodine = new Date(`2022-12-31`);
console.log(pocGodine, krajGodine);
let d1 = firebase.firestore.Timestamp.fromDate(pocGodine);
let d2 = firebase.firestore.Timestamp.fromDate(krajGodine);

db.collection(`tasks`)
.where(`due_date`, `>=`, d1)
// .where(`due_date`, `<=`, d2)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.title, doc.start_date, doc.due_date);
        });
    }
    else {
        console.log(`Niz je prazan :(`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});



// Su završeni,
let danDan = new Date(`2022-01-30`);
let danUTimestamp = firebase.firestore.Timestamp.fromDate(danDan)
console.log(danDan, danUTimestamp);
db.collection(`tasks`)
.where(`due_date`, `<`, danUTimestamp)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.title, doc.due_date);
        });
    }
    else {
        console.log();
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});
*/

// Tek treba da počnu.
let dDan = new Date(`2022-01-30`);
let dDanTimestamp = firebase.firestore.Timestamp.fromDate(dDan);
console.log(dDanTimestamp);

// pretvaranje Timestamp-a u date 
let date = new Date(dDanTimestamp);
console.log(date.getTime());

db.collection(`tasks`)
.where(`start_date`, `>`, dDanTimestamp)
.get() 
.then((querySnapshot) => {
    if(querySnapshot != 0) {
        querySnapshot.forEach(doc => {
            doc = doc.data();
            console.log(doc.title);
        });
    }
    else {
        console.log(`Niz je prazan, Nigga`);
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
})

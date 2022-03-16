// pristup kolekciji
let coll = db.collection(`customers`);
console.log(coll);

let c1 = coll.doc(`customer1`);
console.log(c1);

// moze da se direktno pristupi dokumentu
let c2 = db.doc(`customers/cutomer2`);
console.log(c2);

// dodavanje novog dokumenta
db.collection(`customers`)
.doc(`customer8`)
.set({
    name: "Laza Lazic",
    age: 35,
    addresses: ["Cacak", "Loznica"],
    salary: 50000
})
.then(() => {
    console.log(`Sve je superiska.`);
})
.catch(() => {
    console.log(`Nije bas sve superiska.`);
});

coll.doc(`customer8`)
.set({
    height: 180
}, {merge: true})
.then(() => {
    console.log(`Sve je superiska.`);
})
.catch(() => {
    console.log(`Nije bas sve superiska.`);
});

coll.doc(`customer7`)
.set({
    height: 200
},{merge: true})
.then(() => {
    console.log(`Sve je superiska.`);
})
.catch(() => {
    console.log(`Nije bas sve superiska.`);
});

// dodavanje novog taska
let datum1 = new Date("2022-03-15 19:00:00");
let datum2 = new Date("2022-03-15 21:00:00");

// Add a new document in collection tasks
db.collection("tasks")
.doc("task5")
.set({
    description: "Igraj igrice sa drugarima",
    start_date: datum1,
    due_date: datum2,
    priority: false,
    title: `Gaming night with friends`

})
.then(() => {
    console.log(`Sve je superiska.`);
})
.catch(() => {
    console.log(`Nije bas sve superiska.`);
});

// azuriranje postojeceg dokumenta

db.collection(`tasks`)
.doc(`task4`)
.update({
    description: `We gonna play some football.`
})
.then(() => {
    console.log(`Sve je superiska.`);
})
.catch(() => {
    console.log(`Nije bas sve superiska.`);
});

let blog1 = {
    title: `Osnovni HTML tagovi!`,
    likes: 30,
    dislikes: 9,
};

let blog2 = {
    title: `Osnovni CSS selektori`,
    likes: 70,
    dislikes: 5,
};

let blog3 = {
    title: `Napredni CSS selektori`,
    likes: 50,
    dislikes: 60,
};

let blog4 = {
    title: `Uvod u JS`,
    likes: 150,
    dislikes: 50,
};

let blog5 = {
    title: `IF naredba grananja`,
    likes: 250,
    dislikes: 160,
};



let user1 = {
    username: `JelenaMatejic`,
    age: 27,
    blogs: [blog1, blog2, blog3],
};

let user2 = {
    username: `StefanStanimirovic`,
    age: 32,
    blogs: [blog4, blog5],
};

let users = [user1, user2];

// 1. Ispisati sve blogove koje su napisali autori iz niza users
console.log(`1. Ispisati sve blogove koje su napisali autori iz niza users`);

users.forEach(korisnici => {
    korisnici.blogs.forEach(blogovi => {
        console.log(blogovi.title);
    });
});

// 2. Ispisati imena onih autora koji imaju ispod 30 godina
console.log(`2. Ispisati imena onih autora koji imaju ispod 30 godina`);
users.forEach(korisnici => {
    if (korisnici.age < 30) {
        console.log(korisnici.username);
    }
});

// 3. Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log(`3)) Ispisati naslove onih blogova koji imaju više od 50 lajkova`);

users.forEach(korisnik => {

    korisnik.blogs.forEach(blog => {
        if (blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// 4. Ispisati sve blogove autora čiji je username ’StefanStanimirovic’
console.log(`4))) Ispisati sve blogove autora čiji je username ’StefanStanimirovic’`);

users.forEach(korisnik => {
    if (korisnik.username === `StefanStanimirovic`) {
        korisnik.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
});

// 5. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log(`5)) Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali`);

users.forEach(korisnik => {
    let suma = 0;
    korisnik.blogs.forEach(blog => {
        suma += blog.likes
    });
    if (suma > 200) {
        console.log(korisnik.username);
    }
});

// 6. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log(`6)) Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena`);
// let ukupnaSuma = 0;
// let uBrojcanik = 0;
// users.forEach(korisnik => {
//     let suma = 0;
//     let brojcanik = 0;
//     korisnik.blogs.forEach(blog => {
//         suma += blog.likes;
//         brojcanik ++;
//     });
//     ukupnaSuma += suma;
//     uBrojcanik += brojcanik;

// });
// let prosPozOcena = ukupnaSuma / uBrojcanik;
// console.log(prosPozOcena);

// users.forEach(korisnici => {
//     korisnici.blogs.forEach(blog => {
//         if (blog.likes > prosPozOcena)
//         console.log(blog.title);
//     });
// });

// 7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
console.log(`7)  Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena`);

let uBrojLikes = 0;
let uBrojDis = 0;
let uBrojcanik = 0;

users.forEach(korisnik => {
    let sumaLikes = 0;
    let sumaDis = 0;
    let brojcanik = 0;
    korisnik.blogs.forEach(blog => {
        sumaLikes += blog.likes;
        sumaDis += blog.dislikes;
        brojcanik++;
    });
    uBrojLikes += sumaLikes;
    uBrojDis += sumaDis;
    uBrojcanik += brojcanik;
});
console.log(uBrojLikes);
console.log(uBrojDis);
console.log(uBrojcanik);

let avrgLikes = uBrojLikes / uBrojcanik;
let avrgDis = uBrojDis / uBrojcanik;

console.log(avrgLikes);
console.log(avrgDis);

users.forEach(korisnik => {
    korisnik.blogs.forEach(blog => {
        if (blog.likes > avrgLikes && blog.dislikes < avrgDis) {
            console.log(blog.title);
        }
    });
});

// 

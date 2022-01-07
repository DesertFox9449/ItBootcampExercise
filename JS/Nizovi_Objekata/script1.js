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

// users = [user1, user2];



// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga
console.log(user1.blogs[0].title);

// Niz korisnika
let users = [user1, user2];

// Ko su autori blogova
console.log(users[0].username, users[1].username );
users.forEach(element => {
    console.log(element.username);
});

// Ispisati sve blogove koje su napisali autori iz niza users

users.forEach(korisnici => {
    korisnici.blogs.forEach(blogovi => {
        console.log(blogovi.title);
    });
});


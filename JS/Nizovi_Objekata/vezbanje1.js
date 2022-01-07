

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

let arrBlogs = [blog1, blog2, blog3];

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova.

let likes = array => {
    let suma = 0;
    array.forEach(element => {
        suma += element.likes;
    });
    return suma;
};
console.log(likes(arrBlogs));

/// Drugi nacin
let likes2 = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].likes;
    }
    return suma;
};
console.log(likes2(arrBlogs));

////
let suma1i3 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(suma1i3);
////

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosLikes = (array, suma) => suma / array.length;

console.log(prosLikes(arrBlogs, likes(arrBlogs)));

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let likesVsDis = array => {
    array.forEach(element => {
        if (element.likes > element.dislikes) {
           console.log( element.title);
        }
    });

};
likesVsDis(arrBlogs);

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploLikDis = array => {
    array.forEach(element => {
        if ((element.likes / 2) > element.dislikes) {
           console.log( element.title);
        }
    });

};
duploLikDis(arrBlogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = array => {
    array.forEach(element => {
        if (element.title[element.title.length - 1] == `!`) {
            console.log(element.title);
        }
    });
};
uzvicnik(arrBlogs);

// 6. 


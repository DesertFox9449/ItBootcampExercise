//////////////////////////////////////////////////
// Sa predavanja

let blog = {
    title: `Moj blog`,
    content: `Tekst`,
    author: `Pera`,
};

console.log(blog);
console.log(typeof blog);

let blog1 = {
    title: `HTML`,
    content: `Ovo je blog o osnovnim HTML tagovima`,
    author: `Jelena`,
    
};

function hello(params) {
    
}

console.log(blog1);
console.log(typeof blog1);
console.log(blog1.title);
console.log(blog1.content);
console.log(blog1.author);

blog1.title = `Osnove HTML-a`;

console.log(blog1.title);

blog1[`autor`] = `Jelena Matejic`
console.log(blog1[`autor`]);
console.log(blog1[`author`]);
console.log(blog1);

/////////////////////////////////////

let user = {
    username: `JM`,
    age: 27,
    blogs: [`IF naredba grananja`, `WHILE petlja`, `FOR petlja`],
    login: function() {    // ne arrow funkcija  // metod = funkcija u objektu
        console.log(`Ulogovani ste`);
    },
    logout: function() {
        console.log(`Izlogovani ste`);
    },
    logBlogs: function() {
        this.blogs.forEach(element => {
            console.log(element);
        });
        
    }
};

// console.log(user);
// console.log(user.blogs[2]);
// let nasloviBlogova = user.blogs;
// for (let i = 0; i < nasloviBlogova.length; i++) {
//     document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
// }

// for (let i = 0; i < user.blogs.length; i++) {
//     document.body.innerHTML += `<h3>${user.blogs[i]}</h3>`;
// }


// Poziv metoda
user.login();
user.logout();
user.logBlogs();


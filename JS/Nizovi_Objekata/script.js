
let blog1 = {
    title: `Osnovni HTML tagovi`,
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

arrBlogs.forEach(element => {
    console.log(element.title, element.likes);
});

arrBlogs.forEach(element => {
    document.body.innerHTML += `<h3>${element.title}</h3>`;
    document.body.innerHTML += `<p style="color: green;">${element.likes}</p>`;
    document.body.innerHTML += `<p style="color: red;">${element.dislikes}</p>`;
});

// Promena vrednosti elementa
blog3.title = `Napredni HTML tagovi`;
console.log(blog3.title);

arrBlogs[2].title = `HTML tagovi`;
console.log(arrBlogs[2].title);
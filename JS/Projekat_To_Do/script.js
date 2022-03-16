let liAll = document.getElementsByTagName(`li`);
console.log(liAll);
liAll = Array.from(liAll);
console.log(liAll);

// Svakom <li> elementu iz liste dodati Event Listener
// (Hint: proći petljom po listi <li> elemenata koje ste dohvatili i svakom od njih dodati Event Listener) 
for(let i = 0; i < liAll.length; i++) {
    liAll[i].addEventListener(`click`, () => {
        if(liAll[i].style.textDecoration == `lineThrough`) {
            liAll[i].style.textDecoration = `none`;
        }
        else {
            liAll[i].style.textDecoration = `lineThrough`;
        }
    });
    
}

let ul = document.querySelector(`ul`);
let form = document.querySelector(`form`);

/*
db.collection(`tasks`)
.orderBy(`start_date`, `desc`)
.get()
.then((querySnapshot) => {
    if(querySnapshot.length != 0){
        querySnapshot.forEach(doc => {
            doc = doc.data();
            let li = document.createElement(`li`);
            ul.appendChild(li);
            li.innerText = `${doc.title}:   ${doc.start_date.toDate()}`;
            if(doc.priority === true) {
                li.style.color = `red`;
            }
            else {
                li.style.color = `green`;
            }
        });
    }
})
.catch((err) => {
    console.log(`Doslo je do greske, ${err}`);
});
*/

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    // mozemo da pristupimo elementima u formi preko njihovog ID-a
    // prvi input ima ID title, form.title
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    
    // let priority = false;
    // if(this.priority.checked) {
    //     priority = true;
    // }
    // kraci zapis
    let priority = this.priority.checked;
    
    let description = this.description.value;

    // iz stringova u objekte
    let start_date_obj = new Date(start_date);
    let due_date_obj = new Date(due_date)

    console.log(typeof start_date, due_date);
    console.log(typeof start_date_obj, due_date_obj);

    // iz objekta u Timestamp
    let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

    console.log(typeof start_date_ts, due_date_ts);

    ///////////////
    let obj = {
        title: title,
        start_date: start_date_ts,
        due_date: due_date_ts,
        priority: priority,
        description: description
    };

    db.collection(`tasks`)
    .add(obj)
    .then(() => {
        console.log(`Uspesno dodat novi zadatak`);
    })
    .catch((err) => {
        console.log(`Doslo je do greske. ${err}`);
    });

});

db.collection(`tasks`)
.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    // console.log(changes);
    changes.forEach(change => {
        let type = change.type;
        let doc = change.doc;
        if(type == `added`) {
            doc = doc.data();
            let li = document.createElement(`li`);
            ul.appendChild(li);
            li.innerText = `${doc.title}:   ${doc.start_date.toDate()}`;
            if(doc.priority === true) {
                li.style.color = `red`;
            }
            else {
                li.style.color = `green`;
            }
        }
    });
});
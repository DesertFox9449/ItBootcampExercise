export class Chatroom {
    // konstruktor prima dva elementa, chats dobijamo povezivanjem sa bazom podataka

    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection(`chats`);
    }
    // seter i geter za room
    set room(pera) {
        pera = pera.trim();
        this._room = pera;
    }
    get room() {
        return this._room;
    }
    // seter i geter za username
    set username(zika) {
        zika = zika.trim();
        if(zika.length >= 2 && zika.length <= 10) {
            this._username = zika;
        }
        else {
            alert(`Username mora da sadrzi izmedju 2 i 10 karaktera.`);
        }
        
    }
    get username() {
        return this._username;
    }

    // Kreirati asinhroni metod
    async addChat (msg) {
        // kreirati objekat koji nosi trenutno vreme
        let date = new Date();
        // kreirati objekat
        let obj = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: date
        }
        // dodati u bazu podataka
        // umesto db.collection(`chats`)
        // imamo seter this.chats
        let promis = await this.chats.add(obj);
        return promis;
        // prosledjujemo obj kao parametar za add
        // mozemo i preko chat().set(obj)
        // ovako je lakse

        // ovde ide async/await zbog toga sto moze da se dugo ceka na upis u bazu, u zavisnosti od konekcije i kolicine podataka

        // praksa je da se poruka ne ispisuje ovde, vec na mestu pozivanja, jer onda mozemo da menjamo sadrzaj poruke
    }
    // kreirati novi metod getChats kao osluskivac
    getChats(change) {
        this.chats.where(`room`, `==`, this.room)
        this.chats.orderBy(`created_at`)
        this.chats.onSnapshot((snapshots) => {
            snapshots.docChanges().forEach(change => {
                if(change.type == `added`) {
                    change = change.data();
                    callback(change)
                }

            });
        })

    }
    // updateUsername metod
}


export class ChatUI{
    constructor(msg){
        this.message = msg;
    }
    // seter i geter
    set message(jablan) {
        jablan = jablan.trim();
        if(jablan.length > 0) {
            this._message = jablan;
        }
    }
    get message() {
        return this._message;
    }

    templateLI(data) {
        let newDate = data.created_at.toDate();
        let htmlLI = 
        `
        <li>
        ${data.username}
        <br>
        ${data.message} 
        <br>
        ${this.formatDate(newDate)}

        </li>
        `;
        this.chatRoom.innerHTML += htmlLI;
    }

    formatDate(date) {
        let dan = date.getDate();
        let mesec = date.getMonth();
        let godina = date.getFullYear();
        let sati = date.getHours();
        let minuti = date.getMinutes();

        // dodavanje nule na da vrednosti imaju dve cifre
        dan = String(dan).padStart(2,"0");
        mesec = String(mesec).padStart(2,"0");
        sati = String(sati).padStart(2,"0");
        minuti = String(minuti).padStart(2, "0");

        let novoVreme = `${dan}.${mesec}.${godina}. - ${sati}:${minuti}`;
        return novoVreme;
    }
}
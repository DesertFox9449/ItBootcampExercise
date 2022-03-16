export class Film {
    constructor(n, r, godIz) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = godIz;
    }
    set naslov(n) {
        n = n.trim();
        if(n.length != 0) {
            this._naslov = n;
        }
        else {
            this._naslov = `Munje it is.`
        }
        
    }
    get naslov() {
        this._naslov = n;
    }

    set reziser(r) {
        r = r.trim()
        if(r.length != 0) {
            this._reziser = r;
        }
        else {
            this._reziser = `Hola`;
        }
    }
    get reziser() {
        this._reziser = r;
    }

    set godinaIzdanja(godIz) {
        if(godIz < 1900) {
            this._godinaIzdanja = 2000;
        }
        else {
            this._godinaIzdanja = godIz;
        }
        
    }
    get godinaIzdanja() {
        this._godinaIzdanja = godIz;
    }

    stampaj() {
        console.log(this);
    }
}
/*
Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
*/

export class Film {
    constructor(n, r, god, o) {
        this.naslov = n;
        this.reziser = r;
        this.godina = god;
        this.ocene = o;
    }
    // naslov
    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        }
        else {
            this._naslov = `NoName`;
        }
    }
    get naslov() {
        return this._naslov;
    }
    // reziser
    set reziser(r) {
        let r1 = r.trim();
        if(r1.length > 0) {
            this._reziser = r1;
        }
        else {
            this._reziser = `NoDirector`;
        }
    }
    get reziser() {
        return this._reziser;
    }
    // godina
    set godina(god) {
        if (god > 1800) {
            this._godina = god;
        }
        else {
            this._godina = 1800;
        }
    }
    get godina() {
        return this._godina;
    }
    // ocene
    set ocene(o) {
        this._ocene = o;
    }
    get ocene() {
        return this._ocene;
    }
    stampaj() {
        console.log(this._naslov);
    }
    // Napraviti metod prosek koji vraća prosečnu ocenu 
    prosek(nizOcena) {
        let suma = 0;
        let avrgOcena = ``;
        let br = 0;
        nizOcena.forEach((ocena)=> {
            suma += ocena
            br++;
        });
        avrgOcena = suma / br;
        return avrgOcena;
    }   
}
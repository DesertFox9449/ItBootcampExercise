// Klasa i Konstruktor(elementi)
class Auto {
    constructor(m, b, ik, bv = 5) {
        
        this.marka = m; // poziva se seter marka
        this.boja = b; // poziva se seter boja
        this.imaKrov = ik; // poziva se seter imaKrov
        this.brojVrata = bv; //  poziva se brojVrata
    }
    sviraj() {
        console.log(`Beep! Beep!`);
    }
    vozi(x) {
        let m = this._marka;
        console.log(`${m} vozi ${x} kilometara.`);
    }
    // Seter i geter za marku
    set marka(m) {
        // najbolje da se da isto ime kao u konstruktoru
        // samo bez donje crte
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = `Auto`;
        }
    }
    get marka () {
        return this._marka;
    }
    // seter i geter za polje boja
    set boja(b) {
        // let b1 = b.trim();
        // if (b1.length > 0) {
        //     this._boja = b1;
        // }
        // else {
        //     this._boja = `boja`;
        // }
        this._boja = b;
    }
    get boja() {
        return this._boja;
    } 
    // seter i geter za imaKrov
    set imaKrov (ik) {
        this._imaKrov = ik;
    }
    get imaKrov () {
        return this._imaKrov;
    }   
    // seter i geter za brojVrata
    set brojVrata(bv) {
        
        if (bv > 0) {
            this._brojVrata = bv;
        }
        else {
            this._brojVrata = `Nema vrata`;
        }
    }
}

export default Auto;

/*
// Metoda koja postavlja vrednost polja
    postaviMarku(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = `Auto`;
        }
    }
    // Metoda koja cita vrednost polja
    dohvatiMarku() {
        return this._marka;
    }
*/    
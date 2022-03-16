export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    // ime
    set ime(i) {
        let i1 = i.trim();
        if(i.length > 0) {
            this._ime = i1;
        }
        else{
            this._ime = `Slavica it is`;
        }
    }
    get ime() {
        return this._ime;
    }
    // visina
    set visina(v) {
        if(v > 0 && v < 250){
            this._visina = v / 100;
        }
        else{
            this._visina = 180 / 100;
        }
    }
    get visina() {
        return this._visina;
    }
    //  tezina
    set tezina(t) {
        if(t > 0 && t < 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 100;
        }
    }
    get tezina() {
        return this._tezina;
    }
    stampaj() {
        console.log(this);
    }
    Bmi() {
        let BMI = this._tezina / this._visina ** 2;
        return BMI;
    }
    Kritican() {
        if (this.Bmi(this.tezina) > 40 || this.Bmi(this.tezina) < 15) {
            return true;
        }
        else {
            return false;
        }
    }
}
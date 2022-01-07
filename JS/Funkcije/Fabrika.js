function fabrika(a, b, c) {
    let prva
    let druga
    let treca
    let cetvrta 

    if(a > b) {
        prva = a;
        if(a < c) {
            prva = c;
            druga = a;
            treca = b;
        }
        else {
            if(c < b) {
                prva = a;
                druga = b;
                treca = c;
            }
            else {
                prva = a;
                druga = c;
                treca = b;
            }
        }
    }
    else {
        prva = b;
        if(b < c) {
            prva = c;
            druga = b;
            treca = a;
        }
        else {
            if(c < a) {
                prva = b;
                druga = c;
                treca = a;
            }
            else {
                prva = b;
                druga = a;
                treca = c;
            }
        }
    }
    console.log(prva, druga, treca);

    if(prva - druga == druga - treca) {
        let razlika = druga - treca;
        cetvrta = treca - razlika;
    }
    else if(prva - druga < druga - treca) {
        let razlika = prva - druga;
        cetvrta = druga - razlika;
    }
    else if(prva - druga > druga - treca) {
        let razlika = druga - treca;
        cetvrta = prva - razlika;
    }
    return cetvrta;

}
console.log(fabrika(100, 80, 60)); // 1
console.log(fabrika(100, 60, 80)); // 2
console.log(fabrika(100, 40, 80)); // 3
console.log(fabrika(100, 80, 40)); // 4
console.log(fabrika(100, 40, 60)); // 5 
console.log(fabrika(120, 60, 40)); // 6 
// console.log(fabrika(175,135,55));
// console.log(fabrika(175, 135, 95));
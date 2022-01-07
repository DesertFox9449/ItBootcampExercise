// Formirati objekat dan koji sadrži:

let day = {
    date: `2021/12/25`,
    rain: false,
    sunshine: false,
    cloudy: true,
    // temp: [-25, -7, -8, -10, -13, -9, -6, -3],
    temp: [38, 27, 28, 40, 33, 29, 26, 32],
    // temp: [10, 7, 8, 10, 13, 9, 6, -3],
    /////////////////// Metode

    // Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosTemp: function() {
        let suma = 0;
        let avrg = ``;
        this.temp.forEach(element => {
            suma += element;
        });
        return avrg = suma / this.temp.length;
    },
    // Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natTemp: function () {
        let broj = 0;
        let srednja = this.prosTemp();
        this.temp.forEach(element => {
            if(element > srednja) {
                broj++;
            }
        });
        return broj;
    },
    // Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function() {
        let broj = 0;
        let max = this.temp[0];
        this.temp.forEach(element => {
            if (max < element) {
                max = element;
            }
        });
        this.temp.forEach(element => {
            if(element == max) {
                broj++;
            }
        });
        return broj;
    },
    // Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    izmedjuTemp: function (temp1, temp2) {
        let broj = ``;

        console.log(temp1, temp2);
        if (temp1 > temp2) {
            this.temp.forEach(element => {
                if(temp1 > element && temp2 < element) {
                    broj++;
                }
            });
        }
        else {
            this.temp.forEach(element => {
                if(temp1 < element && temp2 > element) {
                    broj++;
                }
            });
        }
        return broj;
        
    },
    // Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function() {
        return this.temp.length / 2 < this.natTemp();
    },
    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    ledenTemp: function() {
        let max = this.temp[0];
        this.temp.forEach(element => {
            if (max < element) {
                max = element;
            }
        });
        console.log(max);
        return (max < 0) ? true: false;
    },
    
    // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropskiTemp: function() {
        let min = this.temp[0];
        this.temp.forEach(element => {
            if (min > element) {
                min = element;
            }
        });
        
        return (min > 24) ? true: false;
    },
    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    uzastopnaTemp: function(params) {
        let prvoMerenje = this.temp[0];
        for (let i = 1; i < this.temp.length; i++) {
            if (prvoMerenje - this.temp[i] > 8 || prvoMerenje - this.temp[i] < -8) {
                return true;
            }
            prvoMerenje = this.temp[i];
        }
        return false;
    },
    // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajenTemp: function(params) {
        let max = this.temp[0];
        let min = this.temp[0];
        this.temp.forEach(element => {
            if (max < element) {
                max = element;
            }
            if (min > element) {
                min = element;
            }
        });
        return ((this.rain == true && min < -5) || (this.cloudy == true && max > 25) || (this.rain == true && this.sunshine == true && this.cloudy == true)) ? true: false;
    }
};
// 1
console.log(`Prosecna temperatura u toku danasnjeg dana je ${day.prosTemp()} stepeni.`);
// 2
console.log(`Bilo je ${day.natTemp()} merenja sa natprosecnom temperaturom.`);
// 3
console.log(`Bilo je ${day.maxTemp()} merenja sa maksimalnom temperaturom.`);
// 4
console.log(day.izmedjuTemp(day.temp[0], day.temp[3]));
// 5
console.log(day.iznadProseka());
// 6
console.log(day.ledenTemp());
// 7
console.log(day.tropskiTemp());
// 8
console.log(day.uzastopnaTemp());
// 9
console.log(day.neuobicajenTemp());

//////////////////// return  NE RADI sa forEach petljom  //////////////////////
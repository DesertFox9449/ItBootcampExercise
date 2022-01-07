function fabrika(n1, x2, x3) {
    let m = "";     // vrednost koja fali
    let n2 = "";
    let n3 = "";
    let n4 = "";
    // 1         fabrika(100, 80, 60); 
    //                   n1   x2  x3  
    if ((n1 - x2) == (x2 - x3) && (x2 > x3)) {
        n2 = x2;
        n3 = x3;
        n4 = n3 - (n2 - n3);
        console.log(`Jedan`);

    }
    // 2         fabrika(100, 60, 80);
    //                   n1   x2  x3
    else if ((n1 - x3) == (x3 - x2) && (x3 > x2)) {
        n2 = x3;
        n3 = x2;
        n4 = n3 - (n2 - n3);
        console.log(`Dva`);
    }
    // 3         fabrika(100, 60, 40);
    //                   n1   x2  x3
    // 5         fabrika(100, 80, 40);               
    // da bi se izbeglo mesanje slucajeva 3 i 5 
    ///////// ovaj else_if je samo za slucaj br 3      
    // dodajemo                                                  && ((x2 - x3) < (n1 - x2)

    else if (((n1 - (n1 - (x2 - x3))) == (x2 - x3)) && (x2 > x3) && ((x2 - x3) < (n1 - x2))) {
        n2 = n1 - (x2 - x3);
        n3 = x2;
        n4 = x3;
        console.log(`Tri`);
    }
    // 4          fabrika(100, 40, 60);
    //                    n1   x2  x3
    // 6          fabrika(100, 40, 80);                
    // da bi se izbeglo mesanje slucajeva 4 i 6 
    ///////// ovaj else_if je samo za slucaj br 4 
    // dodajemo                                                  && ((x3 - x2) < (n1 - x3)
    else if (((n1 - (n1 - (x3 - x2))) == (x3 - x2)) && (x3 > x2) && ((x3 - x2) < (n1 - x3))) {
        n2 = n1 - (x3 - x2);
        n3 = x3;
        n4 = x2;
        console.log(`Cetiri`);
    }
    // 5           fabrika(100, 80, 40);
    //                      n1   x2  x3
    else if (((x2 - (x2 - (n1 - x2)) ) == (n1 - x2)) && (x2 > x3)) {
        n2 = x2;
        n3 = x2 - (n1 - x2);
        n4 = x3;
        console.log(`pet`);
    }
    // 6            fabrika(100, 40, 80);
    //                       n1   x2  x3
    else if (((x3 - (x2 - (n1 - x3)) ) == (n1 - x2)) && (x3 > x2) ){
        n2 = x3;
        n3 = x3 - (n1 - x3);
        n4 = x2;
        console.log(`sest`);
    }
    // ako je unos los
    // moze da se stavi jos uslova u grane on 1-6 da bi se else ispunio
    else {
        n4 = `Unos je pogresan.`;
    }
    let vrednosti = `n1 ${n1}, n2 ${n2}, n3 ${n3}, n4 ${n4}.`; 
    return vrednosti;
}

///////////////// Testiranje /////////////////////

// let kraj = fabrika(100, 80, 60);   // 1   
// console.log(kraj);

// kraj = fabrika(100, 60, 80);       // 2
// console.log(kraj);      

// kraj = fabrika(100, 60, 40);       // 3
// console.log(kraj); 

// kraj = fabrika(100, 40, 60);       // 4
// console.log(kraj); 

// kraj = fabrika(100, 80, 40);        // 5
// console.log(kraj); 

// kraj = fabrika(100, 40, 80);        // 6
// console.log(kraj); 
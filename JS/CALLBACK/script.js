let myFunc = (callback) => {
    callback();
};

// myFunc(() => {
//     console.log(`Callback okinuta`);
// });

function hello() {
    console.log(`Callback nigga`);
}

myFunc(hello);

///////////////////////////////

let sum = callback  => {
    callback(1, 2);
    let br1 = 6;
    let br2 = 8;
    callback(br1, br2);
}



sum((x, y) => {
    console.log(x + y);
})

function printSum(a, b) {
    console.log(a + b);
}

sum(printSum);
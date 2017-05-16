function testVar() {
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}
//testVar();

function testLet() {
    let a = 30;
    if(true){
        let a = 50;
        //console.log(a);
    }
    //console.log(a);
}
//testLet();

for (let i = 0; i < 10; i++) {
    //console.log(i);
}
//console.log(i);

 setInterval(function () {getRandomFXRates(1.08,1.083)}, 2000);

function getRandomFXRates(min, max) {
    console.log((Math.random() * (max - min) + min).toFixed(4));
}



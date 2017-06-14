(function sumArr(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log(sum);
})([10, 20, 30]);


let f = (function () {
    let counter = 0;
    return function () {
        ++counter;
        console.log(counter);
    }
})();

f();
f();
f();
f();

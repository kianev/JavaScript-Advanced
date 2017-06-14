
function max(arr) {
    return arr;
}

console.log(max.length);
console.log(max.name);
console.log((function () {}).name); //empty string

function inner(arr) {
    console.log("Caller: " + inner.caller)
}

function outer() {
    inner();
}

outer();

let obj = {
    name: "Pesho",
    print: function () {
        console.log(this);
    }
};
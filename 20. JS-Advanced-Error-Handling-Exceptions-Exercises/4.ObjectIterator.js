function makeIterable(object) {
    let arrayOfKeys = Array.from(Object.keys(object)).sort();
    let index = arrayOfKeys.length - 1;
    return {
        next: function () {
            if(index >= 0){
                return {value: arrayOfKeys[index--], done: false}
            }else{
                return {done: true}
            }
        }
    }
}

let obj = {name: "gosho", "13": true, book: "Lord of the Drinks", 2: 2, age: 15, passportNumber: 12345678};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}


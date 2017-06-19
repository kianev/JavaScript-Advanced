function funtionalSum() {
    let sum = 0;
    function add(num) {
        sum += num;
        return add;
    }
    add.toString = () => sum;
    return add;
}

let add = funtionalSum();

console.log(add(1)(6)(-3).toString());

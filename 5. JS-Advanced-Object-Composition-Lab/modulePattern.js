let moduleObj = {
    count: 0,
    increase: function (num) {return moduleObj.count += num},
    decrease: function (num) {return moduleObj.count -= num},
    value: function () {return moduleObj.count}
};

moduleObj.count = 10;
moduleObj.increase(5);
moduleObj.decrease(3);
//console.log(moduleObj.value());

//module pattern with closure

let module1 = (() => {
    let count = 0;
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count
    }
})();

module1.increase(5);
module1.decrease(2);
console.dir(module1.value());
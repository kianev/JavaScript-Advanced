let revModule = (function () {
    let counter = 0;
    function increase(num) {counter += num}
    function decrease(num) {counter -= num}
    function value() {console.log(counter)}

    return {increase,decrease,value};
})();

revModule.increase(5);
revModule.decrease(2);
revModule.value();

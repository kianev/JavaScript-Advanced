let revModule = (function() {
    let count = 0;
    function change(amount) { return count += amount; }
    function increase(num) { return change(num); }
    function decrease(num) { return change(-num); }
    function value() { return count; }
    return { increase, decrease, value };
})();

revModule.increase(5);
revModule.decrease(6);
console.log(revModule.value());

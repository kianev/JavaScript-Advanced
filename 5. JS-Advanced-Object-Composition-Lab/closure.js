function counterClosure() {
    let counter = 0;
    function getNextCount() {
        console.log(counter++);
    }
    return getNextCount;
}

let counter = counterClosure();

//shorter syntax

let counter2 = (function () {
   let num = 0;
   return function () {
       console.log(++num)
   }
})();

let counter3 = (function (start) {
    let num = start;
    return  () => console.log(++num);
})(10);

counter3();
counter3();


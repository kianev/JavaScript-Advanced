function* fibonacci() {
    let prev = 0;
    let next = 1;
    yield 1;

    while (true){
        let temp = next;
        next += prev;
        prev = temp;
        yield next;
    }
}

let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

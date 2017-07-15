function reverseArrayIterator(arr) {
    let index = arr.length - 1;
    return {
        next: function () {
            if(index >= 0){
                return {value: arr[index--], done: false}
            }else{
                return {done: true}
            }
        }
    }
}

let array1 = [10, 20, 30];

let iterator = reverseArrayIterator(array1);

while (true){
    let item = iterator.next();
    if(item.done)break;
    console.log(item.value);
}

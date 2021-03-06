function* reverseArrayGenerator (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        yield arr[i];
    }
}

let array1 = [10, 20, 30];

for (let item of reverseArrayGenerator(array1)) {
    console.log(item)
}

/*function* oddNums () {
   let num = -1;
   while(true){
       yield num += 2;
   }
}

let g = oddNums();
for (let i = 0; i < 10; i++) {
    console.log(g.next())
}*/

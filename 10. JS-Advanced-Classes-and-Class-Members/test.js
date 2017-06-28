
let obj = {w: 23, h: 44};

let d1 = new Date(2017, 6, 28);
let d2 = new Date(2017, 7, 28);

//console.log(obj, d1, d2);

//anonymous class
 let p = new class{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}(5,6);

 console.log(p);
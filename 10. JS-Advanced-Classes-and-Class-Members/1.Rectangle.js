class Rectangle {
    constructor(width = 0, height = 0, color = null) {
        this.width = width;
        this.height = height;
        this.color = color;
    };
}

//destructuring assignment

class Rectangle2 {
    constructor(width = 0, height = 0, color = null) {
        [this.width, this.height, this.color] = [width, height, color];
    };
    //member function
    calcArea () {
        return this.width * this.height;
    }

    resize(ratio) {
        this.width *= ratio;
        this.height *= ratio;
    }
}

let rect = new Rectangle2(20, 20, "red");
rect.resize(10);
console.log(rect.calcArea());

let r = new Rectangle(20, 30, "green");
let r2 = new Rectangle(10, 5,);
let r3 = new Rectangle();

let rectArr = [r, r2, r3];


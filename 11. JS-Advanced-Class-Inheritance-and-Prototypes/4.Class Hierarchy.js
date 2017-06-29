class Figure{
    constructor(){
        if(new.target === Figure){
            throw new Error("Error");
        }
    }

    toString(){
        return `${this.constructor.name} - `;
    }
}

class Circle extends Figure{
    constructor(radius){
        super();
        this.radius = radius;
    }

    toString(){
        return `${super.toString()} radius: ${this.radius}`;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Figure{
    constructor(widht, height){
        super();
        this.width = widht;
        this.height = height;
    }

    toString(){
        return `${super.toString()} widht: ${this.width}, height: ${this.height}`;
    }

    get area(){
        return this.width * this.height;
    }
}

let circle = new Circle(8);
console.log("The shape is " + circle);

let rect = new Rectangle(5,5);
console.log("The shape is " + rect);
console.log(rect.area);



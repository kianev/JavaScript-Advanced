
//Mixin
function asCircle() {
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return this;
}

class Circle{
    constructor(r){this.radius = r};
}

asCircle.call(Circle.prototype);//extends class Circle

let circle = new Circle(5);
console.log(circle.area());

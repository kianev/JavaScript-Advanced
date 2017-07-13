let Turtle = require("./turtle");

class GalapagusTurtle extends Turtle{
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten(){
        return this._thingsEaten;
    }

    eat(food){
        this._thingsEaten.push(food);
    }

    grow(age){
        super.grow(age);
        this._thingsEaten = [];
    }

    toString(){
        return super.toString() + `\nThings eaten this year: ${this._thingsEaten.join(", ")}`;
    }
}

module.exports = GalapagusTurtle;

let testGalapagosTurtle = new GalapagusTurtle("Raphael", 18, "male");
console.log(testGalapagosTurtle.toString());

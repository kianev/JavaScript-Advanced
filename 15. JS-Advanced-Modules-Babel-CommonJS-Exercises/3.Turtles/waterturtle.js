let Turtle = require("./turtle");

class WaterTurtle extends Turtle{
    constructor(name, age, gender, waterPool){
        super(name, age, gender);
        this._waterPool = waterPool;
    }

    get currentWaterPool(){
        return this._waterPool;
    }

    travel(waterPool){
        this._waterPool = waterPool;
        this._age += 5;
    }

    toString(){
        return super.toString() + `\nCurrently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;

let testWaterTurtle = new WaterTurtle("Michelangelo", 18, "male", "Sewer");
console.log(testWaterTurtle.toString());

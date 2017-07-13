let Turtle = require("./turtle");

class EvkodianTurtle extends Turtle{
    constructor(name, age, gender, evkodiumValue) {
        super(name, age, gender);
        this._evkodium = evkodiumValue;
    }

    get evkodium(){
        let value = this._evkodium;
        let dencity = this.gender === "male" ? this.age * 3 : this.age * 2;

        return {
            value: value,
            dencity: dencity};
    }

    toString(){
        return super.toString() + `\nEvkodium: ${this.evkodium.value * this.evkodium.dencity}`;
    }
}

module.exports = EvkodianTurtle;

let testEvkodianTurtle = new EvkodianTurtle("Donatello", 18, "male", 100);
console.log(testEvkodianTurtle.toString());

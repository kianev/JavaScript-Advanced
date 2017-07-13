let Person = require("./person");

class Student extends Person{
    constructor(name,id){
        super(name);
        this.id = id;
    }

    saySomething(){
        return `ID: ${this.id}` + super.saySomething();
    }
}

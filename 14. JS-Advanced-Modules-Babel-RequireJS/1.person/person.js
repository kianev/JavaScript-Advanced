class Person{
    constructor(name){
        this.name = name;
    }

    toString(){
        return `I am ${this.name}`;
    }
}

module.exports = Person;
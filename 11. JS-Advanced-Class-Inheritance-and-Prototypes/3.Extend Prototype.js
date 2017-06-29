class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    toString(){
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person{
    constructor(name, email, subject){
        super(name,email);
        this.subject = subject;
    }

    toString(){
        let baseStr = super.toString().slice(0,-1);
        return baseStr + `, subject: ${this.subject}`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
}

function extendPrototype(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendPrototype(Person);

let pers = new Person("Pesho", "pesho@mail.com");
let t = new Teacher("Georgi","georgi@mail.com", "PHP");
let s = new Student("Ana", "ana@mail.ru", 3);

//console.log(pers.toSpeciesString());
//console.log(t.toSpeciesString());
//console.log(s.toSpeciesString());

//t.species = "Rabbit";
//console.log(t.toSpeciesString());
//console.log(s.toSpeciesString());

let t2 = new Teacher("Ivan","iv@mail.com", "JS");
console.log(Object.getPrototypeOf(Object.getPrototypeOf(t2)).species = "Turtle");

console.log(t.toSpeciesString());
console.log(pers.toSpeciesString());
console.log(t2.constructor.name);
console.log(t2 instanceof Teacher);
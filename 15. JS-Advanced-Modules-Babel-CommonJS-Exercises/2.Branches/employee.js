class Employee{
    constructor(name, age, position){
        this.name = name;
        this.age = Number(age);
        this.position = position;
    }

    toString(){
        return `${this.name} ${this.age} (${this.position})`;
    }
}

module.exports = Employee;

let employee1 = new Employee("Peter Ivanov", 25, "Regular Worker");
let employee2 = new Employee("Ivan Peterov", 24, "Regular Worker");
let employee3 = new Employee("John Hissie", 21, "CEO");

//console.log(employee3.toString());


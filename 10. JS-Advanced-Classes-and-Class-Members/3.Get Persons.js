class Person {
    constructor(firstName, lastName, age, email){
        this.firstname = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstname} ${this.lastName} (age: ${this.age} email: ${this.email})`
    }
}

function getperson() {
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('Softuni'),
        new Person('Stefan', 'Nikolov', 25,),
        new Person('Petar', 'Kolev', 24, 'pk@yahoo.com')
    ]
}

console.log(getperson().join(" | "));
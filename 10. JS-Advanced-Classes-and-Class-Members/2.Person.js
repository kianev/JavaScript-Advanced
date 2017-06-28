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

let maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(maria.toString());

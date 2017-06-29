class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

let pers = new Person("Pesho", "pesho@mail.com");

console.log(`Person: ${pers.name} (${pers.email})`);

class Teacher extends Person{
    constructor(name, email, subject){
        super(name,email);
        this.subject = subject;
    }

    teaching(){
        console.log(`${teach.name} is teaching ${teach.subject}`);
    }
}

let teach = new Teacher("Georgi","georgi@mail.com", "PHP");
console.log(`Teacher: ${teach.name} (${teach.email}) teaches ${teach.subject}`);
teach.teaching();
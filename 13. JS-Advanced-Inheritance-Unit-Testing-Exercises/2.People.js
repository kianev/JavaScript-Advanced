function solve() {
    class Employee{
        constructor(name,age){
            if(new.target === Employee){
                throw new Error("Cannot instantiate directly.")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work(){
            let currentTask = this.responsibilites.shift();
            console.log(this.name + currentTask);
            this.responsibilites.push(currentTask);
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary} this month.`)
        }

        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push(" is working on simple tasks.");
        }
    }

    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push(" is working on a complicated tasks.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }

    class Manager extends Employee{
        constructor(name,age){
            super(name,age);
            this.divident = 0;
            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing quarterly report.")
        }

        getSalary(){
            return super.getSalary() + this.divident;
        }
    }

    return {Employee, Junior, Senior, Manager};
}

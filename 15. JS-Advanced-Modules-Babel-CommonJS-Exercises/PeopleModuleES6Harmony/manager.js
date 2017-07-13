import {Employee} from "./employee";

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


import {Employee} from "./employee";

class Junior extends Employee{
    constructor(name,age){
        super(name,age);
        this.tasks.push(" is working on simple tasks.");
    }
}

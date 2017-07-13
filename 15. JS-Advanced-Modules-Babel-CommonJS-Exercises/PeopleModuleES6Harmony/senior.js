import {Employee} from "./employee";

class Senior extends Employee{
    constructor(name,age){
        super(name,age);
        this.tasks.push(" is working on a complicated tasks.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}

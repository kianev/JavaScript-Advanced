let Employee = require("./employee");

class Branch{
    constructor(id, branchName, companyName){
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;
        this.listOfEmployees = [];
    }

    get employees(){
        return this.listOfEmployees;
    }

    hire(employee){
        this.listOfEmployees.push(employee);
    }

    toString(){
        let output = `@ ${this._companyName}, ${this._branchName}, ${this._id}`;
        if(this.listOfEmployees.length === 0){
            output += `\nNone`;
        }else{
            output += `\nEmployed:`;
            this.listOfEmployees.forEach(a => output += `\n** ${a.toString()}`)
        }

        return output;
    }
}

module.exports = Branch;

let branch1 = new Branch(1, "Four Streets Branch", "Default INC.");
branch1.hire("John");
branch1.hire("Boris");
branch1.hire("Nikolaus");

console.log(branch1.toString());


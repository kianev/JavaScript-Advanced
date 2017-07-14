class StudentNotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new StudentNotFoundError("Greshka");
console.log(err);

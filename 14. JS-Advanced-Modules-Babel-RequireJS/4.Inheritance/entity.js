class Entity{
    constructor(name){
        if(new.target === Entity){
            throw new Error("Cannot make an instance of abstract class Computer")
        }
        this.name = name;
    }
}

module.exports = Entity;

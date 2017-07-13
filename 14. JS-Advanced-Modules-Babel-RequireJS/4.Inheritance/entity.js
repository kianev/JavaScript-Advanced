class Entity{
    constructor(name){
        if(new.target === Entity){
            throw new Error("Cannot make an instance of abstract class Entity")
        }
        this.name = name;
    }
}

module.exports = Entity;

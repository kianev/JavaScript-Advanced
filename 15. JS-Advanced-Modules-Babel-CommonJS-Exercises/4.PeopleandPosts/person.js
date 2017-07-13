
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    addToSelector(selector){
        $(selector)
            .append($("<div>").addClass("peson ${this.name")
                .append($("<p>").addClass("name").text(this.name))
                .append($("<p>").addClass("age").text(this.age))
                .append($("<div>").addClass("posts ${this.name")));
    }
}

module.exports = Person;
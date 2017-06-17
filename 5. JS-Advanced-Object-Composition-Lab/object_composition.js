let student = {
    firstName: "Maria",
    lastName: "Green",
    age: 22,
    location: {lat: 42.698, lng: 23.322 }
};

let name = "Sofia";
let population = 1334556;
let country = "Bulgaria";

let town = {name, population, country};
town.location = { lat: 42.698, lng: 23.322 };

let rect = {
    width: 10,
    height: 4,
    grow: function (w, h) {
        this.width += w; this.height += h;
    },
    print: function() {
        console.log(`[${this.width} x ${this.height}]`)
    }
};

rect.grow(5, 5);


let rect1 = {
    width: 10,
    height: 4,
    toString: function () {
        return `rect[${rect1.width} x ${rect1.height}]`
    }
};

console.log(rect1);
console.log(rect1.toString());
console.log("" + rect1); //stringify the object
function outer() {
    //console.log(this); // Object {name: "Peter"}
    let inner = () => {
        //console.log(this); // Window
    };
    inner();
}
let obj = { name: 'Peter', f: outer };
obj.f();

let maria = {
    name: "Maria",
    hello: function (word) {
        console.log(this.name + " says hello " + word)
    }
};

let ivan = {name: "Ivan"};
let helloIvan = maria.hello.bind(ivan);

//maria.hello.call(ivan, "now");
//maria.hello.apply(ivan, ["again"]);

maria.hello("world");
helloIvan("from me");



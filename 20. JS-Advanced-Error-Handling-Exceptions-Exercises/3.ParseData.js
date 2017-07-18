function parseData(recepies) {
    class Candy {
        constructor(topping, filling, spice) {
            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }

        get topping(){
            return this._topping;
        }

        set topping(value){
            let toppings = ['milk chocolate', 'white chocolate', 'dark chocolate'];
            if(!toppings.includes(value)){
                throw new TypeError("Topping invalid");
            }
            this._topping = value;
        }

        get filling(){
            return this._filling;
        }

        set filling(value){
            if(value.length > 3){
                throw new TypeError("Filling invalid")
            }

            if(value.length === 1 && value[0] === ""){
                this._filling = null;
            }else{
                let fillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
                for (let filling of value) {
                    if(!fillings.includes(filling)){
                        throw new Error("Filling invalid");
                    }
                }
                this._filling = value.join(", ");
            }
        }

        get spice(){
            return this._spice;
        }

        set spice(value){
            if(value === 'poison' || value === 'asbestos'){
                throw new TypeError("Spice invalid")
            }

            if(value === ""){
                this._spice = null;
            }else{
            this._spice = value;
            }
        }
    }

    let candy = [];
    for (let recipe of recepies) {
        let tokens = recipe.split(":");
        if(tokens.length !== 3)continue;
        let topping = tokens[0];
        let filling = tokens[1].split(", ");
        let spice = tokens[2];

        try{
            candy.push(new Candy (topping, filling, spice));
        }catch(error){}
    }

    return candy;
}

let result = parseData([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
]);

console.log(result);

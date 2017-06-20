let breakfastRobot = (function() {
    let stock = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omlet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {carbohydrate: 10, protein: 10, fat: 10, flavour: 10}
    };
    
    function restock(microElement, quantity) {
       stock[microElement] += Number(quantity);
       console.log("Success");
    }

    function prepare(recipe, quantity) {
        for (let element of Object.keys(recipes[recipe])) {
            let totalQuantity = recipes[recipe][element] * quantity;
            if(stock[element] < totalQuantity) {
                console.log(`Error: not enough ${element} in stock`);
            }else{
                for (let element of Object.keys(recipes[recipe])) {
                    stock[element] -= recipes[recipe][element] * quantity;
                }
            }
        }

    }

    function report() {
        console.log([...Object.keys(stock)].map((elements) => elements + "=" + stock[elements]).join(" "));
    }
   
    return function commandProcessor(input) {
        let tokens = input.split(" ");
        let command = tokens.shift();
        switch (command){
            case "restock":
                return restock(...tokens);
                break;
            case "prepare":
                return prepare(...tokens);
                break;
            case "report":
                return report();
                break;
        }
    };

})();

breakfastRobot("prepare cheverme 1");
breakfastRobot("restock protein 10");
breakfastRobot("prepare cheverme 1");
breakfastRobot("restock carbohydrate 10");
breakfastRobot("prepare cheverme 1");
breakfastRobot("restock fat 10");
breakfastRobot("prepare cheverme 1");
breakfastRobot("restock flavour 10");
breakfastRobot("prepare cheverme 1");
breakfastRobot("report");









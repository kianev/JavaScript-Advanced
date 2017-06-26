function carFactory(requirements) {
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let carriages = {
        hatchback: { type: 'hatchback', color: requirements.color},
        coupe: { type: 'coupe', color: requirements.color}
    };

    function checkEngine(requirements) {
        if(requirements.power <= 90){
            return engines.small;
        }else if(requirements.power > 90 && requirements.power < 120){
            return engines.normal;
        }else {
            return engines.monster;
        }
    }

    function carriage(requirements) {
        if(requirements.carriage === "hatchback"){
            return carriages.hatchback;
        }else {
            return carriages.coupe;
        }
    }

    function wheelsCalc(order) {
        if(order.wheelsize % 2 === 0){
          return [order.wheelsize - 1, order.wheelsize - 1, order.wheelsize - 1, order.wheelsize - 1];
        }else {
            return [order.wheelsize, order.wheelsize, order.wheelsize, order.wheelsize];
        }
    }

    return  {
        model: requirements.model,
        engine: checkEngine(requirements),
        carriage: carriage(requirements),
        wheels: wheelsCalc(requirements)
    };
}

let order = { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17};

let order1 = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

console.log(carFactory(order));
console.log(carFactory(order1));


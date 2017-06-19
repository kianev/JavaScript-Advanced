function processCommands(commands) {
    let map = new Map();
    let cmdExecutor = {
        create: function ([objName, inherits, parent]) {
            parent = parent ? map.get(parent) : null;
            let newObj = Object.create(parent);
            map.set(objName, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = map.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = map.get(objName), objects = [];
            for (let key in obj) { objects.push(`${key}:${obj[key]}`); }
            console.log(objects.join(', '));
        }
    };

    for (let command of commands) {
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        cmdExecutor[action](commandParameters);
    }
}


/*processCommands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);*/

function createObjects(input) {
    let cars = new Map();

    for (let lines of input) {
        let command = lines.split(" ");
        switch (command[0]) {
            case "create":
                if(command.length == 2) {
                    create(command[1]);
                }else {
                    inherit(command[1], command[3]);
                }
                break;
            case "set":
                set(command[1], command[2], command[3]);
                break;
            case "print":
                print(command[1]);
        }
    }

    function create(name) {
        let car = {};
        cars.set(name, car);
    }

    function inherit(name, parent) {
        let car = Object.create(cars.get(parent));
        cars.set(name, car);
    }

    function set(name, key, value) {
        let car = cars.get(name);
        car[key] = value;
    }

    function print(name) {
        let car = cars.get(name);
        let props = [];
        for (let prop in car) {
            props.push(`${prop}:${car[prop]}`)
        }
        console.log(props.join(","))
    }
}

createObjects(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);







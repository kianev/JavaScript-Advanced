let Extensible = (function () {
        let counter = 0;

        return class Extensible{
            constructor(){
                this.id = counter++;
            }
            extend(template){
                for(let parentProp of Object.keys(template)){
                    if(typeof(template[parentProp]) === "function"){
                        Object.getPrototypeOf(this)[parentProp] = template[parentProp];
                    } else {
                        this[parentProp] = template[parentProp];
                    }
                }
            }
        }
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);


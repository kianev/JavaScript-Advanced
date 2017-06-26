function cloneObject() {
    let object = Object.create({});
    object.extend = function (template) {
        for (let property in template) {
            if(typeof(template[property]) == "function"){
                Object.getPrototypeOf(object)[property] = template[property];
            }else{
                object[property] = template[property];
            }
        }
    };
    return object;
}

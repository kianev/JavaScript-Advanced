let x = -5;
let arr ;
try {
    arr = new Array(x);
}catch (ex){
    //console.log("Error");
    arr = [];
    //console.log(arr);
}

function example(x) {
    try {
        let arr = new Array(x);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        return arr;
    }catch(ex){
        return [];
    }
}

//console.log(example(10));

try{
    throw new RangeError("Invalid range");
    console.log("will not fire");
}catch(ex){
    console.log("Error catched: " + ex.name);
}finally{
    console.log("code to be executed");
}

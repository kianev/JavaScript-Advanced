/*function sortNums(arr) {
    arr.sort(
        (a,b) => a-b
    );
}*/

function sortNums(arr) {
    arr.sort();
}

let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === "[-2,2,4,15]"){
    console.log("success!");
}else{
    console.log("test failed!");
}



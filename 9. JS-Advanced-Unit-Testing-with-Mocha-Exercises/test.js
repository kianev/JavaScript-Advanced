

function reverseString1(str) {
    let splitedString = str.split("").reverse().join("");
    //console.log(splitedString);
}

function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    //console.log(reversed);
}

function reverseString3(str) {
    if (str === "")
        return "";
    else
        return reverseString3(str.substr(1)) + str.charAt(0);
}

function reverseString4(str) {
        return (str === "") ? "" : reverseString4(str.substr(1)) + str.charAt(0);
}

reverseString1("hello");
reverseString2("hello");
//console.log(reverseString3("hello"));
console.log(reverseString4("hello"));





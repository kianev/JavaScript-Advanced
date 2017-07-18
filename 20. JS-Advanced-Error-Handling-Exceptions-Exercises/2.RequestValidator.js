function requestValidator(object) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if(! (object.method && validMethods.includes(object.method))){
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriRegex = /^[\w.]+$/;
    if(!(object.uri && (uriRegex.test(object.uri) || object.uri === "*"))){
        throw new Error("Invalid request header: Invalid URI");
    }

    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if(!(object.version && validVersions.includes(object.version))){
        throw new Error("Invalid request header: Invalid Version")
    }

    let messageRegex = /^[^<>\\&'"]*$/;
    if(! ( object.hasOwnProperty("message") && (messageRegex.test(object.message) || object.message === ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }


    return object;
}

console.log(requestValidator({
        method: 'GET',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: ''
    }));



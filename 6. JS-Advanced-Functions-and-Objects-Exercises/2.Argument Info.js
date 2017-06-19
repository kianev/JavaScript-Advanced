function argumentsInfo() {
    let summary = {};
    for (let obj of arguments) {
        console.log(`${typeof obj} : ${obj}`);
        if(!summary[typeof obj]){
            summary[typeof obj] = 1;
        }else{
            summary[typeof obj]++;
        }
    }
    Object.keys(summary).sort((a,b) => summary[b] - summary[a]).forEach(key => console.log(`${key} = ${summary[key]}`))
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); });

function alcLevel(obj) {
    if(obj.handsShaking){
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
    }
    return obj;
}

let worker = { weight: 95, experience: 3, bloodAlcoholLevel: 0, handsShaking: false};

console.log(alcLevel(worker));

function bmi(name, age, weight, height) {
    let persData = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight/ Math.pow((height)/100, 2)),
    };

    persData.status = persData.BMI < 18.5 ? "underweight" : persData.BMI < 25 ? "normal" : persData.BMI < 30 ? "overweight" : "obese";

    if(persData.BMI >= 30) {
        persData.recommendation = "admission required";
    }

 return persData;
}
console.log(bmi("Honey Boo Boo", 9, 57, 137));

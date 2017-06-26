let createCalculator = require("../add-substract").createCalculator;
let expect = require("chai").expect;

describe("createCalculator", function () {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return -5 after {substract 3; substract 2}", function() {
        calc.subtract(3); calc.subtract(2); let value = calc.get();
        expect(value).to.be.equal(-5);
    });
});

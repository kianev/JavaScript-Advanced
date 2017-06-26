
let sum = require("../sum").sum;
let expect = require("chai").expect;

describe("Test sum", function () {
    it("should return 3 for [2,3]", function () {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
        //expect(sum([1,2])).to.be.equal(3);//short syntax
    });
    it("should return 7 for [5,3]", function () {
        let expectedSum = 7;
        let actualSum = sum([5,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });
    it("should return 0 for ['pesho']", function () {
        let expectedSum = 0;
        let actualSum = sum(['pesho']);
        expect(actualSum).to.be.NaN;
    });
    it("should return 0 for [0]", function () {
        let expectedSum = 0;
        let actualSum = sum([0]);
        expect(actualSum).to.be.equal(expectedSum);
    });
});

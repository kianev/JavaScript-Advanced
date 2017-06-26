
let isSymmetry = require("../check-symmetry").isSymmetric;
let expect = require("chai").expect;

describe("Test symmetry", function () {
    it("should return true for [0]", function () {
        let expected = true;
        let actual = isSymmetry([]);
        expect(actual).to.be.equal(expected);
    });
    it("should return true for [1,2,3,3,2,1]", function () {
        let expected = true;
        let actual = isSymmetry([1,2,3,3,2,1]);
        expect(actual).to.be.equal(expected);
    });
    it("should return true for [1,2,2,1]", function () {
        let expected = true;
        let actual = isSymmetry([1,2,2,1]);
        expect(actual).to.be.equal(expected);
    });
    it("should return true for [1,2,2,1]", function () {
        let expected = true;
        let actual = isSymmetry([1,2,2,1]);
        expect(actual).to.be.equal(expected);
    });
});

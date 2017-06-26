let rgbToHex = require("../RGB-to-Hex").rgbToHexColor;
let expect = require("chai").expect;

describe("rgb-to-hex", function () {
    it("should return '#FF9EAA' for (255, 158, 170)", function () {
        let expected = "#FF9EAA";
        let actual = rgbToHex(255, 158, 170);
        expect(actual).to.be.equal(expected);
    });
    it("should return '#000000' for (0, 0, 0)", function () {
        let expected = "#000000";
        let actual = rgbToHex(0, 0, 0);
        expect(actual).to.be.equal(expected);
    });
    it("should return '#0C0D0E' for (12, 13, 14)", function () {
        let expected = "#0C0D0E";
        let actual = rgbToHex(12, 13, 14);
        expect(actual).to.be.equal(expected);
    });
    it("should return 'undefined' for (0, 0, 0)", function () {
        let expected = undefined;
        let actual = rgbToHex(-1, 0, 0);
        expect(actual).to.be.equal(expected);
    });
});

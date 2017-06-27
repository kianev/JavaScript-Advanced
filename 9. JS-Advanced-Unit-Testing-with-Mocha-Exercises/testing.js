let expect = require("chai").expect;
let jsdom = require("jsdom-global")();
let $ = require("jquery");

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("DOM Testing", function () {
   it("test that DOM elements exists", function () {
       let nameTextbox = $("#name");
       expect(nameTextbox).to.exist;
   });
    it("test that DOM elements exists", function () {
        let nameTextbox = $("#name");
        expect(1).to.be.equal(2, "Numbers do not match");
    });
    it("test that DOM elements exists", function () {
        let nameTextbox = $("#name");
        nameTextbox.val("Pesho");
        expect(nameTextbox.val()).to.be.equal("Pesho");
    });
});
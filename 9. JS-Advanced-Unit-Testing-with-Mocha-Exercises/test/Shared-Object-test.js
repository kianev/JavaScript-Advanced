
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("SharedObject", function () {
    it("Name property, should start with Null", function () {
        expect(sharedObject.name).to.equal(null,"Name did not start with Null");
    });
    it("Income property, should start with Null", function () {
        expect(sharedObject.income).to.equal(null,"Income did not start with Null");
    });

    describe("changeName", function () {
        it("with invalid params should not change name property", function () {
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal(null,"Name changed incorrectly")
        });
        it("with invalid params should not change name property", function () {
            sharedObject.name = "Pesho";
            sharedObject.changeName("");
            expect(sharedObject.name).to.equal("Pesho","Name changed incorrectly")
        });
        it("with invalid params should not change name property", function () {
            let nameTextbox = $("#name");
            nameTextbox.val("Ivan");
            expect(nameTextbox.val()).to.equal("Ivan","Name changed incorrectly")
        });
        it("with valid params should change name property", function () {
            sharedObject.name = "Joro";
            expect(sharedObject.name).to.equal("Joro","Name did not changed correctly")
        });
        it("with valid name should change textbox value", function () {
            sharedObject.changeName("Stamat");
            let nameTextbox = $("#name");
            expect(nameTextbox.val()).to.equal("Stamat", "Name did not change");
        });
    });

    describe("changeIncome", function () {
        it("with invalid params should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({name:"pesho"});
            expect(sharedObject.income).to.equal(130,"Income changed incorrectly")
        });
        it("with floating points should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome(245.44);
            expect(sharedObject.income).to.equal(130,"Income changed incorrectly")
        });
        it("with negative numbers should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome(-100);
            expect(sharedObject.income).to.equal(130,"Income changed incorrectly")
        });
        it("with with 0 should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(130,"Income changed incorrectly")
        });
        it("with valid integer should change income property", function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56,"Income changed incorrectly")
        });
        it("with invalid params should not change income textbox", function () {
            let incomeTextbox = $("#income");
            incomeTextbox.val(5);
            sharedObject.changeIncome({name:"pesho"});
            expect(incomeTextbox.val()).to.equal("5","Income textbox changed incorrectly")
        });
        it("with floating points  should not change income textbox", function () {
            let incomeTextbox = $("#income");
            incomeTextbox.val(5);
            sharedObject.changeIncome(25.87);
            expect(incomeTextbox.val()).to.equal("5","Income textbox changed incorrectly")
        });
        it("with negative numbers should not change income textbox", function () {
            let incomeTextbox = $("#income");
            incomeTextbox.val(5);
            sharedObject.changeIncome(-25);
            expect(incomeTextbox.val()).to.equal("5","Income textbox changed incorrectly")
        });
        it("with 0 should not change income textbox", function () {
            let incomeTextbox = $("#income");
            incomeTextbox.val(5);
            sharedObject.changeIncome(0);
            expect(incomeTextbox.val()).to.equal("5","Income textbox changed incorrectly")
        });
        it("with valid integer should change income textbox", function () {
            sharedObject.changeIncome(56);
            let incomeTextbox = $("#income");
            expect(incomeTextbox.val()).to.equal("56","Income textbox changed incorrectly")
        });
    });

    describe("updateName", function () {
        it("update with invalid parameter should not change name property", function () {
            sharedObject.name = "test";
            let nameTextbox = $("#name");
            nameTextbox.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("test", "Name changed incorrectly")
        });
        it("update with invalid parameter should not change name property", function () {
            let nameTextbox = $("#name");
            nameTextbox.val("testing");
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("testing", "Name changed incorrectly")
        });
    });

    describe("updateIncome", function () {
        it("update with invalid parameter should not change income property", function () {
            sharedObject.income = 245;
            let incomeTextbox = $("#income");
            incomeTextbox.val("pesho");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(245, "Name changed incorrectly")
        });
        it("update with floating parameter should not change income property", function () {
            sharedObject.income = 245;
            let incomeTextbox = $("#income");
            incomeTextbox.val("23.34");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(245, "Income changed incorrectly")
        });
        it("update with negative number parameter should not change income property", function () {
            sharedObject.income = 245;
            let incomeTextbox = $("#income");
            incomeTextbox.val("-10");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(245, "Income changed incorrectly")
        });
        it("update with empty string number parameter should not change income property", function () {
            sharedObject.income = 245;
            let incomeTextbox = $("#income");
            incomeTextbox.val("");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(245, "Income changed incorrectly")
        });
        it("update with valid number parameter should change income property", function () {
            let incomeTextbox = $("#income");
            incomeTextbox.val("177");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(177, "Income changed incorrectly")
        });
    });
});


let expect = require("chai").expect;

function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
};



describe("list", function() {
    list = {};
    beforeEach(function () {
       list = produce();
    });

    it("Constructor should produce correct functions", function () {
       expect(typeof (list.add)).to.equal("function");
       expect(list.delete).to.exist;
       expect(list.toString).to.exist;
    });

    it("It should produce an empty list", function() {
        expect(list.toString()).to.equal("", "toString did not produced the expected result");
    });

    describe("add", function () {
       it("Should add the item to the list", function () {
           list.add(1);
           expect(list.toString()).to.equal("1", "Method add faild to add item to the list");
       });
        it("Should add the items in a correct order to the list", function () {
            list.add("pesho");
            list.add("gosho");
            list.add("stamat");
            expect(list.toString()).to.equal("pesho, gosho, stamat", "Method add faild to add item to the list");
        });
        it("Should add correct amount of item to the list", function () {
            list.add("pesho");
            expect(list.toString()).to.equal("pesho", "Method add faild to add item to the list");
        });
    });

    describe("delete", function () {
        it("Should delete item from the list", function () {
            list.add(1);
            list.add(2);
            list.delete(1);
            expect(list.toString()).to.equal("1", "Delete did not delete the correct item");
        });
        it("Should return undefined if index is negative number", function () {
            expect(list.delete(-1)).to.equal(undefined, "Delete did not work properly");
        });
        it("Should return undefined if index is string", function () {
            expect(list.delete("pesho")).to.equal(undefined, "Delete did not work properly");
        });
        it("Should return undefined if index is floating point number", function () {
            expect(list.delete(2.5)).to.equal(undefined, "Delete did not delete the correct item");
        });
        it("Should not delete item if index is floating point number", function () {
            list.add(19);
            list.delete(2.5);
            expect(list.toString()).to.equal("19", "Delete did not delete an existing value");
        });
        it("With zero should delete correct item", function () {
            list.add(5);
            list.add(10);
            list.delete(0);
            expect(list.toString()).to.equal("10", "Delete did not delete the correct item");
        });
        it("With zero and zero items should return undefined", function () {
            expect(list.delete(0)).to.equal(undefined, "Delete did not delete the correct item");
        });
        it("With index bigger than the array length should not delete anything", function () {
            list.add(5);
            list.add(10);
            expect(list.toString()).to.equal("5, 10", "Delete did not delete the correct item");
        });
    });

});



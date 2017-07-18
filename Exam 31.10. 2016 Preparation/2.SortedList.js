let expect = require("chai").expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe("sortedList",function () {
    let myList = {};
    beforeEach(function () {
        myList = new SortedList();
    });

    it("should has constructor", function () {
        expect(typeof (SortedList)).to.equal("function", "SortedList is not a function");
        expect(SortedList.prototype.hasOwnProperty("add")).to.equal(true,"add method non existent");
        expect(SortedList.prototype.hasOwnProperty("remove")).to.equal(true,"remove method non existent");
        expect(SortedList.prototype.hasOwnProperty("get")).to.equal(true,"get method non existent");
        expect(SortedList.prototype.hasOwnProperty("vrfyRange")).to.equal(true,"vrfyRange method non existent");
        expect(SortedList.prototype.hasOwnProperty("sort")).to.equal(true,"sort method non existent");
        expect(SortedList.prototype.hasOwnProperty("size")).to.equal(true,"size method non existent");
    });

   describe("sortedList size", function () {

     it("Should return zero length at the beginning", function () {
         expect(myList.size).to.equal(0, "Length not properly set");
     });
   });

   describe("add items", function () {
      it("Should add items properly", function () {
         myList.add(3);
         expect(myList.get(0)).to.equal(3, "Method add items does not work properly")
      });
   });

    describe("sort items", function () {
        it("Should add items properly", function () {
            myList.add(9);
            myList.add(3);
            myList.add(6);
            expect(myList.get(0)).to.equal(3, "Method sort does not work properly");
            expect(myList.get(1)).to.equal(6, "Method sort does not work properly");
            expect(myList.get(2)).to.equal(9, "Method sort does not work properly");
        });
    });

    describe("remove items", function () {
        it("Should add items properly", function () {
            myList.add(9);
            myList.add(3);
            myList.add(6);
            myList.remove(1);
            expect(myList.get(0)).to.equal(3, "Method sort does not work properly");
            expect(myList.get(1)).to.equal(9, "Method sort does not work properly");
        });
    });

    describe("wrong indexes", function () {
        it("Should not work with negative index", function () {
            myList.add(9);
            myList.add(3);
            myList.add(6);
            expect(() => myList.get(-1)).to.throw("Error");
            expect(() => myList.remove(-1)).to.throw("Error");
        });

        it("Should not work with index outside the range", function () {
            myList.add(9);
            myList.add(3);
            myList.add(6);
            expect(() => myList.get(5)).to.throw("Error");
            expect(() => myList.remove(5)).to.throw("Error");
        });

        it("Should not work with empty collection", function () {
            expect(() => myList.get(5)).to.throw("Error");
            expect(() => myList.remove(5)).to.throw("Error");
        });
    });
});

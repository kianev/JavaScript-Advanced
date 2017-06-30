class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length){
        this.innerLength += length;
        return this.innerLength;

    }

    decrease(length){
        this.innerLength -= length;
       if(this.innerLength < 0){
           this.innerLength = 0;
           return this.innerLength;
       }else{
           return this.innerLength;
       }
    }

    toString(){
        if(this.innerLength === 0){
            return "...";
        }

        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + "...";
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
test.decrease(3);
console.log(test);

test.decrease(5);
console.log(test);

test.increase(4);
console.log(test.toString());




function sortedList() {
    let object = (() => {
        let array = [];
        let size = 0;
        let sorted = (a,b) => a - b;
        let add = function (item) {
            array.push(item);
            array.sort(sorted);
            this.size++;
            return array;
        };

        let remove = function (index) {
            if(index >= 0 && index < array.length){
                array.splice(index, 1);
                array.sort(sorted);
                this.size--;
            }else{
                throw new Error;
            }
        };

        let get = function (index) {
            if(index >= 0 && index < array.length){
             return array[index];
            }else{
                throw new Error;
            }
        };

        let display = function () {
          return  array.sort(sorted);
        };

        return {add, remove, get, display, size};
    })();

    return object;
}

let list = sortedList();
list.add(3);
list.add(1);
list.add(4);
list.add(7);
list.add(8);
console.log(list.display());


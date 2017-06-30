class SortedList{
    constructor(){
        this.array = [];
        this.size = 0;
    }

    add(element){
        this.array.push(element);
        this.array.sort((a,b) => a - b);
        this.size++;
        return this.array;
    }

    remove(index){
        if(index >= 0 && index <= array.length){
            this.array.splice(index, 1);
            this.array.sort((a,b) => a - b);
            this.size--;
            return this.array;
        }
    }

    get(index){
        if(index >= 0 && index <= array.length){
            return this.array[index];
        }
    }
}

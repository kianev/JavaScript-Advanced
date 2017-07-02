function melons() {
    class Melon{
        constructor(weight,melonSort){
            if(new.target === Melon){
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Sort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element = "Water";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element = "Fire";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element = "Earth";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
            this.element = "Air";
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return `Element: ${this.element}\n` + super.toString();
        }
    }

    let airmelon = new Airmelon(10, "Airs");
    console.log(airmelon.toString());
}

melons();




















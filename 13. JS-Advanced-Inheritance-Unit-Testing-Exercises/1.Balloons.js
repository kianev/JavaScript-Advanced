function solve() {
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            tjis.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLenght){
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLenght = ribbonLenght;
            this._ribbon = {color: ribbonColor, lenght: ribbonLenght};
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLenght, text){
            super(color, gasWeight, ribbonColor, ribbonLenght);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return {Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon};
}

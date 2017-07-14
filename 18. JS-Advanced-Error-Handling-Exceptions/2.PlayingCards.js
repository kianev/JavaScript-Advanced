class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }

    get face() {
        return this._face;
    }

    set face(newFace) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if (!faces.includes(newFace)) {
            throw new Error("Invalid card face " + newFace);
        }

        this._face = newFace;
    }

    get suit() {
        return this._suit;
    }

    set suit(newSuit) {
        const suits = ['C', 'D', 'H', 'S'];
        if (!suits.includes(newSuit)) {
            throw new Error("Invalid card suit " + newSuit);
        }

        this._suit = newSuit;
    }

    toString() {
        let suitToChar = {
            'C': "\u2663",
            'D': "\u2666",
            'H': "\u2665",
            'S': "\u2660"
        };

        return this.face + suitToChar[this.suit];
    }
}

console.log('' + new Card('A', 'S'));
console.log('' + new Card('10', 'H'));
console.log('' + new Card('1', 'C'));
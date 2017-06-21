function votingSystem(action) {
    let that = this;
    let object = (() => {
        function upvote() {
            that.upvotes++
        }

        function downvote() {
            that.downvotes++
        }

        function score() {
            let obfuscated = that.upvote + that.downvote > 50;
            let votesToAdd = Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes));
            let rating;
            if (that.upvotes / (that.upvotes + that.downvotes) > 0.66) {
                rating = "hot";
            } else if ((that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes) {
                rating = "controversial";
            } else if (that.downvotes > that.upvotes) {
                rating = "unpopular";
            } else {
                rating = "new";
            }

            if (that.upvote + that.downvote < 10) {
                rating = "new";
            }

            if (obfuscated) {
                return [that.upvotes + votesToAdd, that.downvotes + votesToAdd, that.upvotes - that.downvotes, rating];
            } else {
                return [that.upvotes, that.downvotes, that.upvotes - that.downvotes, rating];
            }
        }

        return {upvote, downvote, score};
    })();
    return object[action]();
}


let obj = {id: '1', author: 'pesho', content: 'hi guys', upvotes: 100, downvotes: 100};

//votingSystem.call(obj, 'downvote');
//console.log(votingSystem.call(obj, 'score'));

function monkeyPatcher(input) {

    switch (input) {
        case "upvote":
            this.upvotes += 1;
            break;
        case "downvote":
            this.downvotes += 1;
            break;
        case "score":
            return score(this);
    }

    function score(obj) {
        let modifier = 0;
        if (obj.upvotes + obj.downvotes > 50) {
            modifier = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25)
        }

        let score = obj.upvotes - obj.downvotes;
        let rating = "";
        if (obj.upvotes / (obj.upvotes + obj.downvotes) > 0.66) {
            rating = "hot";
        } else if ((obj.upvotes > 100 || obj.downvotes > 100) && obj.upvotes >= obj.downvotes) {
            rating = "controversial";
        } else if (obj.downvotes > obj.upvotes) {
            rating = "unpopular";
        } else {
            rating = "new";
        }

        if (obj.upvote + obj.downvote < 10) {
            rating = "new";
        }

        return [obj.upvotes + modifier, obj.downvotes + modifier, score, rating];
    }
}

let post = {id: '1', author: 'pesho', content: 'hi guys', upvotes: 100, downvotes: 100};


console.log(monkeyPatcher.call(post, "score"));

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, "downvote");
}

console.log(monkeyPatcher.call(post, "score"));



let BaseElement = require("./baseElement");

class Artile extends BaseElement{
    constructor(title, content){
        super();
        this.title = title;
        this.content = content;
        this.timeStamp = new Date();
    }

    getElementString(){
        let output = `<div class="article">\n`;
        output += `\t<div class="article-title">${this.title}</div>\n`;
        output += `\t<p>${this.content}</p>\n`;
        output += `</div>`;

        return output;
    }
}

module.exports = Artile;


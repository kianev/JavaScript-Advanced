let BaseElement = require("./baseElement");

class Footer extends BaseElement{
    constructor(message){
        super();
        this.message = message;
    }

    getElementString(){
        let output = `<footer>Copyright &copy; {this.message}</footer>`;
        return output;
    }
}

module.exports = Footer;

function wikiParser(selector) {
    let content = $(selector);
    let text = content.text();

    text = replaceTag(text, "===", "h3");
    text = replaceTag(text, "==", "h2");
    text = replaceTag(text, "=", "h1");
    text = replaceTag(text, "'''", "b");
    text = replaceTag(text, "''", "i");
    text = replaceAnchor(text);

    function replaceTag(str, symbol, tag) {
        let pattern = `${symbol}(.*?)${symbol}`;
        let regEx = new RegExp(pattern, "g");
        return str.replace(regEx, (m, g) => `<${tag}>${g}</${tag}>`);
    }

    function replaceAnchor(str) {
        let result = str;

        let pattern = `\\[\\[([^'=\\[]*?)\\|([^'=\\[]*)]]`;
        let regEx = new RegExp(pattern, "g");
        result = result.replace(regEx, (m, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`);

        pattern = `\\[\\[([^'=\\[\\|]*?)]]`;
        regEx = new RegExp(pattern, "g");
        result = result.replace(regEx, (m, g) => `<a href="/wiki/${g}">${g}</a>`);

        return result;
    }

    content.html(text);
}




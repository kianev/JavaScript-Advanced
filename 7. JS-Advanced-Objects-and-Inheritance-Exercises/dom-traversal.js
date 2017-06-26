function  domTraversal(selector) {
    let start =$(selector);
    let maxDebth = 0;
    let maxDebthElement ="";
    
    function setDebth(debth, element) {
        if(debth > maxDebth){
            maxDebth = debth;
            maxDebthElement = element;
        }
        let children = $(element).children();
        children.each((index, element) => setDebth(debth + 1, element))
    }
    setDebth(1, start);
    let jqueryElement = $(maxDebthElement);
    jqueryElement.addClass("highlight");

    while(maxDebth){
        maxDebth--;
        console.log(jqueryElement);
        jqueryElement.addClass("highlight");
        jqueryElement = jqueryElement.parent();
    }
}

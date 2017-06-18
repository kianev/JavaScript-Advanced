function domSearch(selector, cs) {
        function addElement() {
            let element = $(".add-controls").find("input").val();
           let item = $(`<li class="list-item">
                    <a class="button">X</a>
                    <strong>${element}</strong>
                </li>`);
           item.find("a").click(deleteElement);
           $(".items-list").append(item);
        }
        
        function deleteElement() {
            $(this).parent().remove();
        }

    function generateHTML() {
        let add_controls = $(`<div class="add-controls">
           <label>Enter text:<input></label>
                <a class="button" style="display: inline-block">Add</a>
            </div>`);

        let search_controls = $(`<div class="search-controls">
           <label>Search:<input></label>
            </div>`);

        let result_controls = $(`<div class="result-controls">
          <ul class="items-list">
                
            </ul>
            </div>`);

        add_controls.find("a").click(addElement);
        search_controls.find("input").change(search);

        $(selector).append(add_controls);
        $(selector).append(search_controls);
        $(selector).append(result_controls);
    }

    function search() {
       let word = $(".search-controls").find("input").val();
       if(!cs) {
           word = word.toLowerCase()
       }
       let items = $(".items-list");

        for (let i = 0; i < items.length; i++) {
            let item = items.eq(i);
            let textContent = item.find("strong").text();
            if(!cs){
                textContent = textContent.toLowerCase();
            }
            if(!textContent.includes(word)){
                items.eq(i).css("display", "none");
            }else{
                items.eq(i).removeAttr("style");
            }
        }
    }

    generateHTML();
}
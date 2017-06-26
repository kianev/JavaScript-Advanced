function bugTracker() {
    let object = (() => {
        let container = [];
        let selector = undefined;
        let counter = 0;
        let report = function (author, description, reproducible, severity) {
            container[counter] = {
                ID: counter,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: "Open",
            };
            counter++;

            if(selector){
                updateHTML();
            }
        };

        let setStatus = function (id, newStatus) {
            container[id].status = newStatus;
            if(selector){
                updateHTML();
            }
        };

        let remove = function (id) {
            container = container.filter(el => el.ID !== id);
            if(selector){
                updateHTML();
            }
        };

        let sort = function (method) {
            switch(method){
                case 'author':
                    container = container.sort((a,b) => a.author.localeCompare(b.author));
                    break;
                case 'severity':
                    container = container.sort((a,b) => a.severity - b.severity);
                    break;
                case 'ID':
                    container = container.sort((a,b) => a.ID - b.ID);
            }
            if(selector){
                updateHTML();
            }
        };

        let output = function (selected) {
            selector = selected;
        };

        let updateHTML = function () {
            $(selector).html("");
            for (let item of container) {
                $(selector).append($('<div>')
                    .attr('id', "report_" + item.ID)
                    .addClass('report')
                    .append($('<div>')
                        .addClass('body')
                        .append($('<p>')
                            .text(item.description)))
                    .append($('<div>')
                        .addClass('title')
                        .append($('<span>')
                            .addClass('author')
                            .text('Submitted by: ' + item.author))
                        .append($('<span>')
                            .addClass('status')
                            .text(item.status + " | " + item.severity))));

            }
        };

        return {report, setStatus, remove, sort, output};
    })();
    return object;
}

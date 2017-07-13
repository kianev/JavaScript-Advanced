let data = require('./data');

function sort(property) {
    return data.sort((a,b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    return data.filter(e => e[property] == value);
}

console.log(filter('status', 'processing'));


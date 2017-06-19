function sortArray(array, sortMethod) {
    let ascending = ((a,b) => a - b);
    let descending = ((a,b) => b - a);

    let sortingMethod = {
        "asc": ascending,
        "desc": descending
    };
    return array.sort(sortingMethod[sortMethod])
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
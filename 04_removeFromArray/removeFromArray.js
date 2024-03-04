const removeFromArray = function(array, ...elements_to_remove) {
    const elems = new Set(elements_to_remove);
    return array.filter((x) => ! elems.has(x));

};

// Do not edit below this line
module.exports = removeFromArray;

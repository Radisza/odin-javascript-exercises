function isNumber(number) {
    return typeof(number) == 'number';
}
const sumAll = function(first, last) {
    if (first < 0 || last < 0 ||
        !isNumber(first) || !isNumber(last)) {
        return 'ERROR';
    }
    if (first > last) {
        let x = first;
        first = last;
        last = x;
    }
    return first * last + (last/2)*(last-1);
};

// Do not edit below this line
module.exports = sumAll;

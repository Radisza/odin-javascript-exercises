function isDivisibleBy(number, division) {
    return number % division == 0;
}

const leapYears = function(year) {
    return (
        isDivisibleBy(year, 4) &&
        (
            !isDivisibleBy(year, 100) ||
            isDivisibleBy(year, 400))
    );

};

// Do not edit below this line
module.exports = leapYears;

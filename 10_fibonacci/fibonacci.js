const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    if (number == 0) {
        return 0;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= number; i++) {
        let new_number = prev+curr;
        prev = curr;
        curr = new_number;
    }

    return curr;
};


// Do not edit below this line
module.exports = fibonacci;

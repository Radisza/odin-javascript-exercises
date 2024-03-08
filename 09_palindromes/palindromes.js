const PUNCTUATIONS = new Set([".", ",", ":", "!", "?"]);

function isConsiderable(character) {
    return character != ' ' && !isPunctuation(character);
}

function isPunctuation(character) {
    return PUNCTUATIONS.has(character);
}

const palindromes = function (text) {
    let begin = 0;
    let end = text.length - 1;
    while (begin < end) {
        if (!isConsiderable(text[begin])) {
            begin++;
            continue;
        }
        if (!isConsiderable(text[end])) {
            end--;
            continue;
        }
        if (text[begin].toLowerCase() != text[end].toLowerCase()) {
            return false;
        }
        begin++;
        end --;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;

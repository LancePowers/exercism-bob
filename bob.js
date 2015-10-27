var Bob = function () {};

Bob.prototype.hey = function (input) {
    // If input is all uppercase and contains letters It's yelling.
    if (input === input.toUpperCase() && input.toLowerCase() !== input.toUpperCase()) {
        return 'Whoa, chill out!';
    }
    // If input ends with a ? it's a question... (Shocker)
    if (input.slice(-1) === '?') {
        return 'Sure.'
    }
    // If input isn't blank it's saying something
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) !== ' ') {
            return 'Whatever.';
        }
    }
    // Otherwise it's silent.
    return 'Fine. Be that way!';
};

module.exports = Bob;
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var reversed = [];
    for (var i = s.length-1; i >= 0; i--) {
        reversed.push(s[i]);
    }
    let j = 0;
    while (j < reversed.length) {
        s[j] = reversed[j];
        j++;
    }
};
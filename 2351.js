var repeatedCharacter = function(s) {
    let a = new Set();
    for (let char of s) {
        if (a.has(char)) return char;
        a.add(char);
    }
};

console.log(repeatedCharacter("abccbaacz"))
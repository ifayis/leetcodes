var rotateString = function(s, goal) {
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if (s === goal) return true;
    }
    return false;
};


console.log(rotateString('abcde','cdeab'))
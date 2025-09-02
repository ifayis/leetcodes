var lengthOfLastWord = function(s) {
    let a=s.trim().split(' ').pop()
    return a.length
};

console.log(lengthOfLastWord("Hello World"))
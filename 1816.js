var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    return arr.slice(0,k).join(' ')
};
document.writeln(truncateSentence("Hello how are you Contestant",4));

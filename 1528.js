var restoreString = function(s, indices) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
};

document.writeln(restoreString("codeleet", [4,5,6,7,0,2,1,3]))
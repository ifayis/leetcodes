var isPalindrome = function(s) {
    let a= s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    let b= a.split('').reverse().join('');
    if (a===b){
        return true
    }else{
        return false
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
var threeConsecutiveOdds = function(arr) {
    for (let i=0; i<arr.length-1; i++){
        if (arr[i]%2==1 && arr[i+1]%2==1 && arr[i+2]%2==1)
        return true
    }
    return false
};

console.log(threeConsecutiveOdds([2,6,4,1]));

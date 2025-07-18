var missingNumber = function(nums) {
     let a = nums.sort((a,b)=>a-b)
    for (let i=0; i<a.length; i++){
        if (a[i] !== i) return i 
    }
    return a.length
};

console.log(missingNumber([3,0,1])) //2
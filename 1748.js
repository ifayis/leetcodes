var sumOfUnique = function(nums) {
    let a = 0
    for (let i=0; i<nums.length; i++){
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
           a += nums[i]
        }
    }
    return a
};

console.log(sumOfUnique([1,2,3,2]))
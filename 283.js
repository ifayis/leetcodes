var moveZeroes = function(nums) {
    var a = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[a] = nums[i];
            a++;
        }
    }
    while (a < nums.length) {
        nums[a] = 0;
        a++;
    }
};


console.log(moveZeroes([0, 1, 0, 3, 12]));

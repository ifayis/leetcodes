var smallerNumbersThanCurrent = function(nums) {
    let index=[]
    let count = 0
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if (nums[j]<nums[i]){
                count++
            }
        }
        index.push(count);
        count = 0
    }
    return index
};

console.log([8,1,2,2,3]);

var sortedSquares = function(nums) {
    let x = nums.map(a=>a*a)
    let y = x.sort((a,b)=>a-b)
    return y
};

console.log(sortedSquares([-4,-1,0,3,10]));

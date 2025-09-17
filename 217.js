var containsDuplicate = function(nums) {
  var x=new Set(nums)
  if(x.size==nums.length){
    return false
  }
  return true
};

console.log(containsDuplicate([1,2,3,1]));

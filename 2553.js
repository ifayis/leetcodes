var separateDigits = function(nums) {
    return nums.join('').split('').map(Number)
};

document.writeln(separateDigits([13,25,83,77]));

var kidsWithCandies = function(candies, extraCandies) {
    let big = Math.max(...candies)
    let arr = []
    for (let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= big){
             arr.push(true) 
        }else{
             arr.push(false)
        }
    }
    return arr
};

document.writeln(kidsWithCandies([2,3,5,1,3]))
var findRestaurant = function(list1, list2) {
    let minSum = Infinity
    let result = []

    for (let i = 0; i < list1.length; i++) {
        let j = list2.indexOf(list1[i])
        if (j !== -1) {
            let sum = i + j
            if (sum < minSum) {
                minSum = sum
                result = [list1[i]]
            } else if (sum === minSum) {
                result.push(list1[i])
            }
        }
    }
    return result
}

document.writeln(findRestaurant(
    ["happy","sad","good"], 
    ["sad","happy","good"]
));

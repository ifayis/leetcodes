var createCounter = function(init) {
    let count = init
    const increment = function(){
        count ++
        return count 
    }
    const decrement = function(){
        count--
        return count
    }
    const reset = function(){
        count = init
        return count
    }
    return {increment, decrement, reset}
};
const counter = createCounter(5)

console.log(counter.increment())

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

var addTwoPromises = async function(promise1, promise2) {
    let [a,b] = await Promise.all([promise1,promise2])
    return a+b
};

console.log(addTwoPromises(promise1, promise2))
document.writeln('in console')
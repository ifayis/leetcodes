var addToArrayForm = function(num, k) {
  let a = BigInt(num.join('')) + BigInt(k)
  return a.toString().split('').map(Number)
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516));

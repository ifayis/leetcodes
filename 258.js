var addDigits = function(num) {
  while (num>9){
     num = num.toString().split('').reduce((a,b) => a + Number(b),0)
  }
  return num

};

document.writeln(addDigits(38))
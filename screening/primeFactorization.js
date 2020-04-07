function primeFactorization(number) {

  var factors = [];
  
  for(let i=2; i<=number; i++) {
    while((number % i) === 0) {
      factors.push(i);
      number = number / i;
    }
  }
  return factors;
};

var number = 20;
var x = primeFactorization(number);
console.log(x);
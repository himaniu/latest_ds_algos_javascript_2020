function checkNumberPowerOfTen(number){
  number = Math.floor(number)
  if(number>=10){
    return (checkNumberPowerOfTen(number/10));
  } 
  else if(number<=0) {
    return (checkNumberPowerOfTen(number*10));
  }
  else if(number === 1) {
    return true
  }
  else {
    return false;
  }
}


var x = checkNumberPowerOfTen(200);
console.log(x);
function findPair(arr,number) {
  arr.sort();
  var boolean = false;
  var resultPair = [];
  for(var i=0; i < arr.length; i++) {
    for(var j=i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === number) {
        if(arr[i] <= arr[j]) {
          boolean = true;
          resultPair.push([arr[i], arr[j]]);
        }
      }
    }
  }
  if(boolean === false)
    console.log('No such pair exists for the number ' + number);

    return resultPair;
}

//soln 2
const numberSumPairFromArray = (list, target_sum) => {
  const length = list.length;
  const result = [];
  const map = {};
  for (let i = 0; i < length; i++) {
      let remainingNumber = target_sum - list[i];
      if(list.includes(remainingNumber) && ! (Object.keys(map).includes(list[i]) || Object.values(map).includes(list[i])) ) {
          map[list[i]]= remainingNumber;
          if(list[i] !== remainingNumber){
              result.push([list[i], remainingNumber]);
          }
      }
  }

  return result;
}

var a = [1,2,3,4,5,6];
var number = 6;

findPair(a,number);
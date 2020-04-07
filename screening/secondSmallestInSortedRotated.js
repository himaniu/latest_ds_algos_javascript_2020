function secondSmallestInSortedRotatedArray(arr) {
  var smallest = Number.MAX_VALUE;
  var position;
  
  if(arr.length < 2) {
    console.log('There is no second smallest element in array');
    return;
  }
  
  for(var i=0; i<arr.length; i++) {
    if(smallest > arr[i]) {
      smallest = arr[i];
      position = i;
    }
  }
  
  while(arr[position%arr.length]==arr[(position+1)%arr.length]) {
    position++;
    
    if(position > arr.length) {
      console.log('All the elements in the array are same.');
      return;
    }
  }
  console.log(arr[(position+1)%arr.length]);
}


var arr = [-1,-1,0,0,0,0,1,1,1,2,3,4,-1,-1];

secondSmallestInSortedRotatedArray(arr);

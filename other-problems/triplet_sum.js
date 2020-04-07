const tripletSum = (arr, trarget) => {
    let result = [];
    const len = arr.length;
    for (let i = 0; i < len - 2; i++) {
      if (i == 0 || arr[i] > arr[i - 1]) {
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
          let sum = arr[i] + arr[j] + arr[k];
          if (sum == trarget) {
            result.push([arr[i], arr[j], arr[k]]);
            j++;
            k--;
            while (j < k && arr[j] == arr[j - 1]) {
                j++;
            }
            while (j < k && arr[k] == arr[k + 1]) {
                k--;
            }   
          } else if (sum < trarget) {
            j++;
          } else {
            k--;
          }
        }
      }
    }
    return result;
  }
  
 let triplet = tripletSum([1,2,3,4,5,6,7,8,9], 10);

alert(JSON.stringify(triplet));
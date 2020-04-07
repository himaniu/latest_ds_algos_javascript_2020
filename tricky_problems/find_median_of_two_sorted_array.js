
/*
Given n size unsorted array, find its mean and median.
*/
//single array 
const findMinMedian = (list1, list2) => {
    let combinedList = list1.concat(list2);
    const length  = combinedList.length;
  //  let mean = combinedList.reduce((a, c) => a + c) / length;
    combinedList = combinedList.sort((a,b) => a-b);
    let median = 0;
    if (length % 2 !== 0) {
        median = combinedList[(length-1)/2];
    } else {
        median = (combinedList[(length/2)-1] +  combinedList[length/2]) / 2;
    }
    return median;
   // return [mean, median];
}


//solution for two sortedArray median with merger sort


function findMedian( A,  B){
    //int[] temp = new int[A.length + B.length];
    let temp = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let lenA = A.length;
    let lenB = B.length;

    while(i<lenA && j<lenB){
        if(A[i] <= B[j]){
            temp[k++] = A[i++];
        }else{
            temp[k++] = B[j++];
        }
    }
    while(i<lenA){
        temp[k++] = A[i++];
    }
    while(j<lenB){
        temp[k++] = B[j++];
    }

    let lenTemp = temp.length;

    if((lenTemp)%2 == 0){
        return ( temp[lenTemp/2-1] + temp[lenTemp/2] )/2.0;
    }
    return temp[lenTemp/2];

}


var result = findMinMedian([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]) // 16
result = findMinMedian([1, 3], [2]) //2
result = findMinMedian([1, 3], [2, 4])  //2.5



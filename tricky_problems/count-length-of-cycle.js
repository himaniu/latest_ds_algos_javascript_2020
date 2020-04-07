/**
 * countLengthOfCycle(array, startIndex)
 * You are given an integer array
 * Starting from array startIndex follow each element to the index it points to.
 * Follow it until you finds a cycle
 * examples: countLengthOfCycle([1,0], 0) == 2
 *  countLengthOfCycle([1,0,2], 0) == 2
 */


 const countLengthOfCycle = (array, startIndex) =>{
    let visited = {};
    let index = startIndex;
    let count = 1;
    while(!(index in visited)){
          let currentItem = array[index];
          if(currentItem >= array.length)
          return -1;
          visited[index] = count;
          count++;
          index = currentItem;
    };
    return count-visited[index];
 }

 console.log(countLengthOfCycle([1,0,2], 0));



 /* Count Length Of Cycle  */

/**
 * 
 *  1) Run this code in the REPL to observe its behaviour. The
 *     execution entry point is main().
 *  2) Consider adding some additional tests in doTestsPass().
 *  3) Implement countLengthOfCycle() correctly.
 *  4) If time permits, try to improve your implementation.
 */

var _ = require('lodash');

/**
 * countLengthOfCycle(arr, startIndex)
 *
 * You are given an integer array of size N. 
 * Every element of the array is greater than or equal to 0.
 * Starting from arr[startIndex], follow each element to the index it points to. 
 * Continue to do this until you find a cycle. 
 * Return the length of the cycle. If no cycle is found return -1
 *
 * Examples:
 * countLengthOfCycle([1, 0], 0) == 2
 * countLengthOfCycle([1, 2, 0], 0) == 3
*/
const countLengthOfCycle = function(arr, startIndex) {
  //TODO: Implement Solution
  
  return -1;
}

const doTestsPass = () => {
  let testsPassed = true;
  let testCases = [
  [[1, 0], 0, 2],
  [[1, 2, 0], 0,  3]
  ];
  
  _.forEach(testCases, (testCase) =>{
  testsPassed &= 
    countLengthOfCycle(testCase[0], testCase[1]) === testCase[2];
  })
  
  return testsPassed;
}

/**
 * Main execution entry.
 */
if(doTestsPass())
{
  console.log("All tests pass!");
}
else
{
  console.log("There are test failures.");
}
/**
 * Who is elected as monitor between student 
 * ..when teacher eliminate a student after k length of song   
 * e.g students = [1,2,3,4] // n =4 , k 2
 * then electedMonitor = 1
 */
const _ = require('lodash')

const whoIsElected = (n, k) => {
    let totalStudents = _.range(1, n+1); // [1,2,3,4]
    let i = -1;
    while(totalStudents.length > 1){
        let delIndex = (i+k) % totalStudents.length ;
        totalStudents.splice(delIndex, 1);
        i = ((i+k) % (totalStudents.length +1)) -1;
    }
    return totalStudents[0];
 }
 whoIsElected(4,2);


 //with recursion
 const whoIsElected = (n, k) => {
    if (n == 1) 
     return 1; 
   else
     return (whoIsElectedd(n - 1, k) + k-1) % n + 1; 
 }


// own custom solution brute-force

 function  circulaterArry(totalStudents, newStartIndex){
    let newArray = totalStudents.slice(newStartIndex, totalStudents.length);
    let skippedElements = totalStudents.slice(0, newStartIndex);
    return newArray.concat(skippedElements);
}

function findElectedStudent(n,k){
    let totalStudents = _.range(1, n+1); // [1,2,3,4]
    let delIndex = k-1;
    while(totalStudents.length > 1){
        if(delIndex < totalStudents.length){
          totalStudents.splice(delIndex, 1);
          totalStudents = circulaterArry(totalStudents, delIndex);
        }else{
            let newDelIndex =(k % totalStudents.length) ? 1 : 0;
            totalStudents.splice(newDelIndex, 1);
            totalStudents = circulaterArry(totalStudents, newDelIndex); 
        }
    }
    return `(${n},${k}) == > ${totalStudents[0]}` ;
}


  
    
var result= findElectedStudent(10,3); //1
console.log( result);
result = findElectedStudent(2,2); // 1
console.log(result);
 // 1
result = findElectedStudent(10,3); // 1
console.log(result);
result = findElectedStudent(100,2); // 73
console.log(result);

result = findElectedStudent(10,4);
console.log(result);
result = findElectedStudent(6,2);
console.log(result);
result = findElectedStudent(6,3);
console.log(result);
result = findElectedStudent(5,2);
console.log(result);


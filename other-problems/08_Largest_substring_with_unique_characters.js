/*
Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf
*/

/*

*/


// aaabcbdeaf Output : cbdeaf

function findLargestSubStringWithUniqueChars(str) { 
    var allchars = str.split('');
    let i = 0;
    let uniqueChars = []; // tempArray
    let finalOutputList = []; // result array with all possible substring 
    while (i< allchars.length) {
         var currentChar = allchars[i];
        if(!uniqueChars.includes(currentChar)){
            uniqueChars.push(currentChar);     
            if(i === allchars.length - 1){  // make sure we are putting last string
                finalOutputList.push([...uniqueChars]);
            }
        }else{
             finalOutputList.push([...uniqueChars]); // put the substring chars into result array

             uniqueChars.splice(0, uniqueChars.indexOf(currentChar) + 1); 
             // remove characters till last occurance of repeating char

             uniqueChars.push(currentChar);
        }
             i++;    
    }
    return finalOutputList.sort((a,b) => { return a.length -b.length;  }).pop().join('');
}
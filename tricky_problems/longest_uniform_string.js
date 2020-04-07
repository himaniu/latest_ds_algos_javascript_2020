/**
 * 
 * Find longest uniform substring 
 */

function longestUniformSubstring(inputStr){
    let i = 1;
    let longestLength = 0;
    let longestStart = -1;
    while (i < inputStr.length) {
        let start = i-1;
        let currentLength = 1;
        while(i < inputStr.length && inputStr[i] == inputStr[i-1]){
            i++;
            currentLength++;
        }

        if(currentLength > longestLength){
            longestLength = currentLength;
             longestStart = start; 
        }
          i++;
    }
    return [longestStart, longestLength];
}

longestUniformSubstring('acdbbbbff');
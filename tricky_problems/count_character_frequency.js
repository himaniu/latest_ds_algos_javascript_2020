const _ = require('lodash');
/**
 * 
 * solution 1 
 */
let getFrequencyString = str => {
        let frequncyCountObj = str.split('').reduce((total, letter) => {
          total[letter] ? total[letter]++ : total[letter] = 1;
          return total;
        }, {});

       return  Object.keys(frequncyCountObj).reduce((acc, key) =>{
            acc += `${key}${frequncyCountObj[key]}`  
            return acc;
        },'');
      };
 getFrequencyString('aab88dffwwwccdd');  // diff question
//result should be : a2b2d3f2w3



let getFrequencyCountBySequence = str => {
    if(str == '')  return ;

    let count = 1, resultStr, lastChar = '';

    for (let i = 0; i < str.length; i++) {
       let current = str.charAt(i);      
       if(current == lastChar){
         count++;
       }else{
        if(! _.isEmpty(lastChar)){
            resultStr +=  `${lastChar}${count}`;
        }
        lastChar = current;
        count = 1;
       }        
    }

    resultStr = resultStr + `${lastChar}${count}`
    return resultStr;
  };

  getFrequencyCountBySequence('aabbbaab');

  //result should be : a2b3a2b1  // its diff preserving sequnce as well


  let getFrequencyCountBySequence = str => {
    if(str == '')  return ;
    let resultStr = '';
    for (let index = 0; index < str.length;) {
        const element = str.charAt(index);
        let charCount= 1;
        let j = index;
        while(j<str.length && element ===  str.charAt(j+1)){
           charCount++;
           j++;
        }
        if(j>index){
            index = j+1;
        }else{
            index++;
        }
        resultStr = resultStr + `${element}${charCount}`
    }
    return resultStr;
   
  };

  getFrequencyCountBySequence('aabbbaab');




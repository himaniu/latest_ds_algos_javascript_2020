
//solution 1 for fetching multiple long words.
function isSubSequenceExist(inputString, dicWord) {
    for (let i = 0; i < dicWord.length; i++) {
        if(inputString.indexOf(dicWord[i]) === -1)
          return false;
    }
    return true;
 }

function findLongestWord(dictionary, inputStr) {
    let ret = dictionary.filter((entry) => isSubSequenceExist(inputStr, entry));
    if(ret.length === 0){
      console.log('no subsequence found');
       return '';
    } else if (ret.length === 1) {
        return ret;
    } else {
        ret = ret.sort((a,b) => b.length - a.length);
        let max = ret[0].length;
        ret = ret.filter((entry) => entry.length === max);
    }
     return ret;
 }


 /* Longest Word  */

/**
 * Instructions to candidate.
 *  1) Given a a string of letters and a dictionary, the function longestWord should
 *     find the longest word or words in the dictionary that can be made from the letters
 *     Input: letters = "oet", dictionary = {"to","toe","toes"}
 *     Output: {"toe"}
 *     Only lowercase letters will occur in the dictionary and the letters
 *     The length of letters will be between 1 and 10 characters
 *     The solution should work well for a dictionary of over 100,000 words
 *  2) Run this code in the REPL to observe its behaviour.
 *  3) Consider adding some additional tests in doTestsPass().
 *  4) Implement the longestWord() method correctly.
 *  5) If time permits, introduce '?' which can represent any letter.  "to?" could match to "toe", "ton" etc
 */

var _ = require('underscore');

class Dictionary {
    constructor(words) {
      this.words = words
    }
  
    contains(word) {
  
    }
    
    isSubSequence(word, inputLetters){
      for (let index = 0; index < word.length; index++) {
          if(!inputLetters.includes(word[index]))
          return false;
      }
      return true;
    }

   /*
    isSubSequence(currentWord, inputString) 
    { 
        let m = currentWord.length;
        let n = inputString.length;    
        let j = 0; 
        for (let i=0; i<n && j<m; i++){ 
            if (currentWord[j] === inputString[i])
                j++; 
        }  
        // If all characters of currentWord were found in inputString 
        return ( j === m); 
    } 
  */
  }
  
  function longestWord(letters, dict) {
    let filteredList =  _.filter(dict.words, (word) => { return dict.isSubSequence(word, letters) });
    
    filteredList.sort((a,b) =>  b.length - a.length);
  
    return filteredList.filter((element) => { return element.length === filteredList[0].length })
  
  }

  var words = ["to", "toe", "toes", "doe", "dog", "god", "dogs", "book", "banana"];
  let dict = new Dictionary(words);
  
    var result = longestWord("toe", dict); //toe
    result = longestWord("osetdg", dict); //["toes", "dogs"]

   

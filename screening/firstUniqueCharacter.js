function firstUniqueCharacter(string) {
  for(let i = 0; i<string.length; i++) {
    var ch = string.charAt(i);
    
    if (string.indexOf(ch) === i && string.indexOf(ch, i+1) === -1) {
      return ch;
    }
  }
  return null;
}


//soln 2

function firstUniqueCharacter(string) {
  for(let i = 0; i<string.length; i++) {
    var ch = string.charAt(i);
    
    if (string.indexOf(ch) === string.lastIndexOf(ch)) {
      return ch;
    }
  }
  return null;
}

var firstUniqueCharacter = firstUniqueCharacter('');

if(firstUniqueCharacter === null)
  console.log('No unique character is present in the string.');
else
  console.log('First unique character is: '+ firstUniqueCharacter);
function missingCharacters(string) {
  
  var m = new Map();
  var arr = []
  
  for(var i=97; i<123; i++) {
    m.set(i, 0);
  }
    
  for(var j=0; j<string.length; j++) {
    m.set(string.charCodeAt(j), 1)
  } 

  m.forEach(function(value, key) {
    if(value===0) {
      arr.push(String.fromCharCode(key));
    }
  });
  
  return arr;
};

var x = missingCharacters('my name is mridul');
console.log(x)
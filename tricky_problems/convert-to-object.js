
//convert an object into string
function convertObjectToString(inputObj, inputStr){
    let resultStr = inputStr || '';
    Object.keys(inputObj).forEach((key) => {
        let keyValue = inputObj[key];
        if (typeof keyValue === 'function') {
        } else if (typeof keyValue == 'object' || Array.isArray(keyValue)) {
            resultStr = convertObjectToString(keyValue, resultStr);
        } else {
            resultStr += keyValue + ', ';
        }
    });
    return resultStr;
}
var res = convertObjectToString({x:'A', y: 'B', c: { d: 1 , y :'ABC'}})  // A,B,1,ABC
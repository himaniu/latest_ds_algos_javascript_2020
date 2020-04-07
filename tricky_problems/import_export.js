
let localvariable = 'Hello'

export const namedExport = () =>{
  return localvariable;
} 


export default function defExpMethd(params) {
    console.log('Hey hi');    
}


/**
 * 
 * it will import both default and named exports
import * as startImp from './problems/other-problems/import_export';
console.log(startImp);

// it will import only default exports
import  onlyDef from './problems/import_export';
console.log(onlyDef);

// way for importing  default and named exports together without start
import  defImp , { namedExport }  from './problems/import_export';
 * 
 */



class Node {
    constructor(value){
        this.left= null;
        this.value = value;
        this.right = null;
    }
}


function put(node, value)
{
  if(!value) return;   
  if(!node.value){
      node.left = new Node();
      node.right = new Node();
      node.value = value;

  }else if(value < node.value){
    return put(node.left, value);
  }else{
      return put(node.right, value); 
  }
}


function contains(node, value)
{
    if( !node || !value) return false;

    if(node.value ===  value)  return true;
    
    if(node.value && (value < node.value)){
        return contains(node.left, value);
      }else{
          return contains(node.right, value); 
      }
}

function inOrderTraversal(node)
{
  return inOrderTraversalAcc(node, []);
}

function inOrderTraversalAcc(node, acc)
{
  if (!node.value)
  {
  return acc;
  }

  inOrderTraversalAcc(node.left, acc);
  acc.push(node.value);
  inOrderTraversalAcc(node.right, acc);
  return acc;

}

var tree = new Node();
  put(tree, 3);
  put(tree, 1);
  put(tree, 2);
  put(tree, 5);

  var values = inOrderTraversal(tree);
  console.log(contains(tree, 0));
  console.log(contains(tree, 5));
  console.log(values);
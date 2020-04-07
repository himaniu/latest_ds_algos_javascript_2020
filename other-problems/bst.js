class Node{

    constructor(val){
        this.left = null;
        this.value = val;
        this.right = null;
    }
}


class BST{

    constructor(){
        this.root = null;
    }

    addItem(value){
        let currentNode = this.root;
        if(!currentNode){
            this.root = new Node(value);
            return;
        }
        const newNode = new Node(value);
        while(currentNode){
            if(newNode.value < currentNode.value){                
                if(!currentNode.left){
                   currentNode.left = newNode;
                                     break;
                }else{
                     currentNode = currentNode.left;
                }
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }else{
                    currentNode = currentNode.right;
                }
            }
        }
    }

    inorder(node){
        if(node){
           this.inorder(node.left);
           console.log(node.value);
           this.inorder(node.right);
        }
     }
}


export default class BstRunner {

    static execute(){
        try {
           
        var obA  = new AO();
        var bst = new BST();
        bst.addItem(40);
        bst.addItem(25);
        bst.addItem(10);
        bst.addItem(32);
        bst.addItem(18);

        bst.inorder(bst.root);
            
        } catch (error) {
            console.log(error)
        }
        
    }    
}

class AO {     
     constructor(){
         this.turr = 'turr';

    }
}


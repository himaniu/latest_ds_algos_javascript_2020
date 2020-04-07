class Node{
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.current_node = null;
    }
    add (data) {
        var new_node = new Node(data);    
        if(this.head === null) {
          this.head = new_node;
          this.current_node = new_node;
        }
        else {
          this.current_node.next = new_node;
          this.current_node = new_node;
        }
    }
    remove(key) {
        let temp = this.head;
        let prev = null;   
       // If head node itself holds the key to be deleted 
       if (temp != null && temp.data == key)   { 
           this.head = temp.next; // Changed head 
           return; 
       }
       // Search for the key to be deleted, keep track of the 
       // previous node as we need to change temp.next 
       while (temp != null && temp.data != key) 
       { 
           prev = temp; 
           temp = temp.next; 
       }     

       if (temp == null) return;         // If key was not present in linked list 
       prev.next = temp.next;  // Unlink the node from linked list 
    }
    reverse() {
		let current = this.head.next;
		let prev = null;
		let next;
        while(current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head.next = prev
        return true
    }
    display() {
        let current = this.head;
		let elements = [];
		while( current !== null ) {
			elements.push( current.data );
			current = current.next
		}
		return elements.join(" ");
    }
    isLoop() {
        let p1 = this.head;
        let p2 = this.head;
        while(p2.next) {
            p1 = p1.next;
            p2 = p2.next.next;
            if (p1 == p2) {
                return true;
            }
        }
        return false;
    }
}

var sll = new LinkedList();

sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.add(5);
sll.add(2);
class LinkedList {
    constructor(...value) {
        this.head = null;
        this.length = 0;
        this.addToHead(...value);
    }

    _addToHeadSingle(value) {
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    addToHead(...value) {
        value.forEach(entry => this._addToHeadSingle(entry));
        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    find(value) {
        let thisNode = this.head;
        while(thisNode) {
            if (thisNode.value === value) {
                return thisNode;
            }
            thisNode  = thisNode.next;
        }
        return thisNode;
    }

    remove(value) {
        if (this.length === 0) {
            return undefined;
        }

        if (this.head.value === value) {
            this.removeFromHead();
            return this;
        }

        let previousNode = this.head;
        let thisNode = this.head.next;
        while(thisNode) {
            if (thisNode.value === value) {
                break;
            }
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        if (thisNode === null) {
            return undefined;
        }
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}
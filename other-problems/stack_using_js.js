function Stack(items = []) {
    this.items = items;
    this.length = items.length;
}
Stack.prototype.add = function (item) {
    this.items.push(item);
    this.length = this.length++;
    return item;
}
Stack.prototype.remove = function() {
    if (this.length === 0) {
        return "Undeflow";
    }
    let item = this.items.pop();
    this.length--;
    return item;
}

Stack.prototype.peak = function() {
    return this.items[this.length-1];
}



class Queue{
    constructor(...items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    remove() {
        this.items.shift();
        return this;
    }
}

class Stack{
    constructor(...items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    remove() {
        this.items.pop();
        return this;
    }
}

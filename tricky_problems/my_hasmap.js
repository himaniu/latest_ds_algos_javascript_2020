

class MyHashMap {
    constructor() {
        this.Entry = class {
            constructor(key, value) {
                this.key = key;
                this.value = value;
            }
        }


        this._entries = [];
        for (let index = 0; index < 10; index++) {
            this._entries.push([]);
        }
    }


    _hashCode(value) {
        const strValue = String(value);
        let hash = 0;
        for (let index = 0; index < strValue.length; index++) {
            let charCode = strValue.charCodeAt(index);
            hash = (hash << 5 - hash) + charCode;
        }
        return hash;
    }

    // % operator in js can return negative also because % is remainder not modulo.
    _mod(x, n) {
        return ((x % n) + n) % n;
    }

    put(key, value) {
        if (key === null || value === null)
            return;
        const id = this._mod(this.hash(key), this._entries.length);
        const list = this._entries[key];
        for (const entry of list) {
            if (entry.key == key) {
                entry.value = value;
                return
            }
        }

        list.push(new this.Entry(key, value));
    }

    get(key) {
        if (key === null)
            return;
        const id = this._mod(this.hash(key), this._entries.length);
        const list = this._entries[key];
        for (const entry of list) {
            if (entry.key == key) {
                return entry.value;
            }
        }
        return null;
    }
}


const myMap = new MyHashMap();
myMap.put('x', 55);
myMap.put('x', 75);
myMap.put('y', 575);
myMap.put('z', 556);

var getValue = myMap.get('x');
console.log(getValue);
//ADT - Abstract Data Type

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    //after the element is appended, listSize is incremented by 1
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    var elementLocation = 0;
    if(this.dataStore[this.listSize] == element) {
        return this.listSize;
    } else if(this.listSize == -1) {
        return -1;
    } else {
        this.listSize--;
        elementLocation = this.find(element);
    }

    return elementLocation;
}

function remove(element) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }

    return false;
}
function clear() {
    //the delete operator removes a property from an object
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        //splice (adds or removes elements in an array) -> splice(index, howManyElementsToRemove, theElement)
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.dataStore;
        return true;
    }
    return false;
}

function contains(element) {
    var elementFoundAtPosition = this.find(element);
    if(elementFoundAtPosition > -1) {
        return true;
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if(this.pos >= 0) {
        --this.pos;
    }
}

function next() {
    if(this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

var listTest = new List();
listTest.append("Clayton");
listTest.append("Raymond");
listTest.append("Cynthia");
listTest.append("Jennifer");
listTest.append("Bryan");
listTest.append("Danny");

console.log(listTest.toString());

//iterating through a list using an iterator(using prev(), next() and currPos())
//start from the beginning of the list
console.log('STARTING FROM BEGINNING OF LIST');
for(listTest.front(); listTest.currPos() < listTest.length(); listTest.next()) {
    console.log(listTest.getElement());
}

//start from the end of the list
console.log('STARTING FROM END OF LIST');
for(listTest.end(); listTest.currPos() >= 0; listTest.prev()) {
    console.log(listTest.getElement());
}

//a List has the following properties
//1. A position and an array that represents the list
//2. A size
//3. Position of the first element
//4. Position of last element
//5. The current position in the list
//6. The length of the list - how many elements it contains
//7. A toString method

//List actions
//1. Append a new element to the list, at the end of it
//2. Remove an element from the list
//3. Check if an element is in the list
//4. Empty the entire list
//5. Get details about an element in the list
//6. Insert a new element after another certain element

//The list iterator
//1. previousElement
//2. nextElement

function ListExercise1() {
    //List properties
    this.pos = 0;
    this.dataStore = [];
    this.listSize = 0;
    this.firstPositionTheList = firstPositionInTheList;
    this.lastPositionInTheList = lastPositionInTheList;
    this.currentPositionInTheList = currentPositionInTheList;
    this.listLength = listLength;
    this.toString = toString;

    //List Actions
    this.appendElement = appendElement;
    this.removeElement = removeElement;
    this.findElement = findElement;
    this.emptyList = emptyList;
    this.getElement = getElement;
    this.insertElementBeforeAnother = insertElementBeforeAnother;
    this.insertElementAfterAnother = insertElementAfterAnother;
    this.insertElementIfGreaterThanAllExisting = insertElementIfGreaterThanAllExisting;

    //iterator properties
    this.previousElement = previousElement;
    this.nextElement = nextElement;
    this.moveTo = moveTo;
}

//START OF LIST PROPERTIES METHODS
function firstPositionInTheList() {
    this.pos = 0;
}

function lastPositionInTheList() {
    this.pos = this.dataStore.length - 1;
}

function currentPositionInTheList() {
    return this.pos;
}

function listLength () {
    return this.dataStore.length;
}

function toString() {
    return this.dataStore;
}

//START OF LIST ACTIONS
function appendElement(element) {
    //after the element is appended, listSize is incremented by 1
    this.dataStore[this.listSize++] = element;
}

function findElement(element) {
    var elementPosition = 0;
    if(this.dataStore[this.listSize] == element) {
        return this.listSize;
    } else if(this.listSize == -1) {
        return -1;
    } else {
        this.listSize--;
        elementPosition = this.findElement(element);
    }

    return elementPosition;
}

function insertElementBeforeAnother(element, before) {
    var currentPositionForBeforeElement = this.findElement(before);
    if(currentPositionForBeforeElement > -1) {
        //following the insertElementAfterAnother method, which increments the index by 1, in the case of insert element before another, the index must remain the same, as we are replacing the position of the current element with
        //the position of a new element - THE NEW ELEMENT WILL RESIDE AT THE INDEX OF THE CURRENT ELEMENT (hope this makes sense)
        this.dataStore.splice(currentPositionForBeforeElement, 0, element);
        this.listSize = this.dataStore.length;
        return true;
    }

    return false;
}

function insertElementAfterAnother(element, after) {
    var currentPositionForAfterElement = this.findElement(after);
    if(currentPositionForAfterElement > -1) {
        //splice (adds or removes elements in an array) -> splice(index, howManyElementsToRemove, theElement)
        this.dataStore.splice(currentPositionForAfterElement + 1, 0, element);
        this.listSize = this.dataStore.length;
        return true;
    }

    return false;
}

function insertElementIfGreaterThanAllExisting(newElement) {
    //local variables
    var existing,
        isGreaterThanAllElements,
        elementsComparisonResult;

    //check to see if element is already in the list
    existing = this.findElement(newElement);
    isGreaterThanAllElements = false;
    if(existing > -1) {
        console.log('The element you are trying to add is already in the list!');
        return;
    }

    for(var i = 0; i < this.dataStore.length; i++) {
        elementsComparisonResult = Math.max(i, newElement);
    }
    if(elementsComparisonResult === newElement) {
        this.dataStore.push(newElement);
        isGreaterThanAllElements = true;
    }

    return isGreaterThanAllElements;
}

function removeElement(element) {
    //In order to remove an element, we must first check if it resides inside the list
    var elementPosition = this.findElement(element);
    if(elementPosition > -1) {
        this.dataStore.splice(elementPosition, 1);
        this.listSize--;
        return true;
    }

    return false;
}

function emptyList() {
    //the delete operator removes a property from an object. In this case it removes the dataStore property, which is the array containing our elements
    delete this.dataStore;
    //here, we reattach it
    this.dataStore = [];
    //and set the list size as well as the position back to zero
    this.listSize = this.pos = 0;
}

//this is used in conjunction with an iterator
function getElement() {
    return this.dataStore[this.pos];
}

//START OF ITERATOR PROPERTIES AND FUNCTIONS
function previousElement() {
    if(this.pos >= 0) {
        --this.pos;
    }
}

function nextElement() {
    if(this.pos < this.listSize) {
        ++this.pos;
    }
}

function moveTo(position) {
    this.pos = position;
}

var listTest = new ListExercise1();
var listTestNumbers = new ListExercise1();

listTest.appendElement('Marco Lorenzi');
listTest.appendElement('Dan Vatca');
listTest.appendElement('Vadim Comanescu');
listTest.appendElement('Alessandro Freddi');
listTest.appendElement('Davide Custode');
listTest.appendElement('Csaba Patkos');
listTest.appendElement('Roberto Judet');
listTest.appendElement('Serban Maduta');
listTest.appendElement('Cristian Sergiu Drincu');
listTest.appendElement('Robert Calin');
listTest.appendElement('Romeo Lazar');
listTest.appendElement('Dan Ardelean');
listTest.appendElement('Dragos Chioran');
listTest.appendElement('Olivia Barna');
listTest.appendElement('Narcisa Cicioc');
listTest.insertElementAfterAnother('Warbringer81', 'Cristian Sergiu Drincu');
listTest.insertElementBeforeAnother('TheMothafuckah', 'Dan Ardelean');
listTest.insertElementBeforeAnother('TheMothafuckah', 'Cristian Sergiu Drincu');

console.log('Elements in the list: ' + listTest.dataStore.length);
console.log('List size property: ' + listTest.listSize);
console.log('Element found at index:' + listTest.findElement('Cristian Sergiu Drincu'));
console.log(listTest.toString());

for(var i = 0; i < 50; i++) {
    listTestNumbers.appendElement(i);
}

var inserted = listTestNumbers.insertElementIfGreaterThanAllExisting(120);
if(inserted) {
    console.log('Inserted largest number in the array!' + listTestNumbers.toString());
}


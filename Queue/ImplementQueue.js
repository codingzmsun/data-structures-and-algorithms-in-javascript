//A queue is a type of list where data are inserted at the end and are removed from the front.
//A queue is an example of a first-in, first-out (FIFO) data structure
//An Array-Based Queue Class Implementation
//function for easily adding data to the end of an array, push(),
// and a function for easily removing data from the front of an array, shift().

// implementing the Queue class by defining the constructor function:
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//adds an element to the end of a queue
function enqueue(element) {
    this.dataStore.push(element);
}
//removes an element from the front of a queue
function dequeue() {
    return this.dataStore.shift();
}
//examine the front and back elements of a queue
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
//     check if a queue is empty
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
// test program
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
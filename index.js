const LinkedList = require('./src/linkedList')

var myList = new LinkedList();

console.log(myList.isEmpty());

myList.add(10);
myList.add(11);
myList.add(12);
myList.add(13);
myList.add(14);

myList.print();

console.log(myList.getSize())

const found = myList.find(14);
console.log(found);

myList.deleteByNode(found)
myList.print();

myList.add(15)
myList.print();
console.log(myList.getSize())
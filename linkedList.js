class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    add(data) {
        var node = new Node(data);
        var current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head

            // while next exist, point it (current is the last node)
            while (current.next) {
                current = current.next;
            }
            // insert the new node in the next prop of the last node
            current.next = node
            // set the prev node
            node.prev = current
        }

        this.size++;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        var curr = this.head;
        var str = '';
        while (curr) {
            str += curr.data + ' -> ';
            curr = curr.next;
        }
        console.log(str);
    }

    find(element) {
        var aux = this.head;
        while (aux != null && aux.data != element) {
            aux = aux.next;
        }
        return aux;
    }

    deleteByNode(node) {
        if (node.next == null) {
            var aux = node.prev
            aux.next = null
        } else {
            node.data = node.next.data;
            node.next = node.next.next;
        }
        this.size--;
    }

}

module.exports = LinkedList;

// var myList = new LinkedList();

// console.log(myList.isEmpty());

// myList.add(10);
// myList.add(11);
// myList.add(12);
// myList.add(13);
// myList.add(14);

// myList.print();

// console.log(myList.getSize())

// const found = myList.find(14);
// console.log(found);

// myList.deleteByNode(found)
// myList.print();

// myList.add(15)
// myList.print();
// console.log(myList.getSize())
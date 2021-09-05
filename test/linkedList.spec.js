const LinkedList = require('../src/linkedList')
const { expect } = require('chai');
const should = require('chai').should();


var myList;

describe("Linked List", function () {
    beforeEach(function () {
        myList = new LinkedList();
    });

    it("node is initializated as empty", function () {
        const size = myList.getSize()
        expect(size).to.equal(0)
    })

    describe("#isEmpty()", function () {
        it("should return true if node is empty", function () {
            const result = myList.isEmpty()
            expect(result).to.be.true
        })

        it("should return false if node is not empty", function () {
            myList.add(10)
            const result = myList.isEmpty()
            expect(result).to.be.false
        })
    })

    describe("#add()", function () {
        it("should return 1 if node is added to List", function () {
            const initialSize = myList.getSize()
            myList.add("A new Node");
            const currentSize = myList.getSize()
            expect(currentSize).to.equal(1)
            expect(currentSize).to.equal(initialSize + 1)
        })
        it("the next of the last node should be null", function () {
            myList.add(10);
            const found = myList.find(10);
            found.should.have.property('next').and.to.be.a('null');
        })
        it("the next of a node should not be null", function () {
            myList.add(10);
            myList.add(15);
            const found = myList.find(10);
            const next = found.next;
            found.should.have.property('next').and.to.be.a('object');
            expect(next).to.not.be.null;
        })
        it("the prev should not be null", function () {
            myList.add(10);
            myList.add(15);
            const found = myList.find(15);
            const prev = found.prev;
            found.should.have.property('prev').and.to.be.a('object');
            expect(prev).to.not.be.null;
        })
    })

    describe("#getSize()", function () {
        it("should return a integer value >= 0", function () {
            const size = myList.getSize()
            expect(size).to.be.a('number')
            expect(size).to.be.above(-1)
        })
    })

    describe("#find()", function () {
        it("should return a Node object", function () {
            myList.add(15);
            const found = myList.find(15)
            found.should.be.a('object')
            found.should.have.property('prev');
            found.should.have.property('next');
        })
        it("should return NULL if the Node is not found", function () {
            const found = myList.find(15)
            expect(found).to.be.null
        })
    })

    describe("#deleteByNode()", function () {
        it("should remove the unique Node of the List", function () {
            myList.add(15);
            const initialSize = myList.getSize()
            const found = myList.find(15);
            myList.deleteByNode(found)
            const currentSize = myList.getSize()
            expect(currentSize).to.equal(initialSize - 1)
            expect(currentSize).to.equal(0)
        })

        it("should remove the last Node of the List", function () {
            myList.add(10);
            myList.add(15);
            const initialSize = myList.getSize()
            const lastNode = myList.find(15);
            myList.deleteByNode(lastNode)
            const currentSize = myList.getSize()
            expect(currentSize).to.equal(initialSize - 1)
            expect(currentSize).to.equal(1)
            const uniqueNode = myList.find(10)
            uniqueNode.should.have.property('prev').and.to.be.a('null');
            uniqueNode.should.have.property('next').and.to.be.a('null');
        })

        it("should remove a Node of the List", function () {
            myList.add(10);
            myList.add(15);
            myList.add(20);
            const initialSize = myList.getSize()
            const found = myList.find(10);
            myList.deleteByNode(found)
            const currentSize = myList.getSize()
            expect(currentSize).to.equal(initialSize - 1)
            expect(currentSize).to.equal(2)
            const uniqueNode = myList.find(15)
            uniqueNode.should.have.property('prev').and.to.be.a('null');
            uniqueNode.should.have.property('next').and.to.be.a('object');
        })
    })
});
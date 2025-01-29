// 10 --> 5 --> 16
// let mylinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null

//             }
//         }
//     }
// }
class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}
class LinkedLiset { 
    constructor (value) {
        this.head =  {
            value: value,
            next: null
        };
        this.teil = this.head;
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value);

        this.teil.next = newNode;
        this.teil = newNode
        this.length++

        return this.printList();;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++
        
        return this;
    }


    printList() {
        const array = [];
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next; 
        }
        return array
    }

    traversToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    insert(index, value) {
        //negative check
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        // Negative check validation  
        if(index >= this.length) {
            this.append(value)
            console.log(`The idex of: ${index} is greater then list length: ${this.length} ,inserting to the end of the list`)
            return this.printList();
        }
        const newNode = new Node(value);
        const leader = this.traversToIndex(index-1);
        const holdingPointer = leader.next

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this.printList()
    }

    remove(index) {
        // Input check 
        if(index >= this.length) {
            console.log(`The idex of: ${index} is greater then list length: ${this.length}`)
            return this.printList();
        }

        const leader = this.traversToIndex(index-1);
        const unwatedNode = leader.next

        leader.next = unwatedNode.next;
        this.length--

        return this.printList()

    }


}

let myLinkedList = new LinkedLiset (10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.remove(2))


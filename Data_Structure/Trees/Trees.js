class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while(true) {
                if (currentNode.value > value) {
                    //if val < Node - Go left

                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //if val > Node - Go right
                    if(!currentNode.right) {
                        currentNode.right = newNode
                        return this;
                    } 
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value){
        if(!this.root) {
            return false;
        }

        let currentNode= this.root;
        let parentNode = null;

        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode.value
                currentNode = currentNode.left;
            } else if (value > currentNode) {
                parentNode = currentNode
                currentNode = currentNode.right;
            }

            else if ( currentNode.value === value) {

                //O1: No right child: 
                if (currentNode.right === null) {
                    this.root = currentNode.left
                } else {

                    //if parent > curnet value , make current left child a child of parent
                    if(currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left;
                    }
                }
                // O2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {

                } else {

                }
            }
        }
    }
    
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(171))


function traverse(node) {
    if (node === null) return null;
    return {
        value: node.value,
        left: traverse(node.left),
        right: traverse(node.right),
    };
}

// console.log(JSON.stringify(traverse(tree.root), null, 2));

function printTree(node, prefix = "", isLeft = true) {
    if (node === null) {
        return;
    }
    console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
    printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
}

// Usage:
printTree(tree.root);
//Building a Binary Search Tree Implementation
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.getMin = getMin;
    this.inOrder = inOrder;
    this.find = find;

}
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

//An inorder traversal visits all of the nodes of a BST in ascending order of the node key values. left root right
//Inorder traversal Binary Search Tree using recursion
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

//Searching for the Minimum/Maximum Value: travels down the left link of each node in the BST until it reaches the left end of the BST
function getMin(data) {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

//Searching for a Specific Value
function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}
//test
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

var min = nums.getMin();
console.log("The MiniMum value is: " + min);

var found = nums.find(161);
if(found !=null){
    console.log("Found");
}else{
    console.log("Not Found");

}


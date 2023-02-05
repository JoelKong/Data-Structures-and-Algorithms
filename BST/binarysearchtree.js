class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = this.right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
let tree = new BinarySearchTree();
tree.root = new Node(11);
tree.root.right = new Node(15);
tree.root.left = new Node(10);

//can do recursively as well

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

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  findRightMinimumValue(node) {
    if (!node || !node.right) return null;
    else return node.right.val;
  }

  remove(val) {
    let _remove = (val, node = this.root) => {
      if (node) {
        if (val < node.val) {
          node.left = _remove(val, node.left);
        } else if (val > node.val) {
          node.right = _remove(val, node.right);
        } else if (node.left && node.right) {
          // 2 children
          node.val = this.findRightMinimumValue(node);
          node.right = _remove(node.val, node.right);
        } else {
          //leaf node
          node = node.left || node.right;
        }
      }
      return node;
    };
    this.root = _remove(val);
  }
}

//       10
//  5            13
//2    7       11     16

let tree = new BinarySearchTree();
tree.root = new Node(11);
tree.root.right = new Node(15);
tree.root.left = new Node(10);

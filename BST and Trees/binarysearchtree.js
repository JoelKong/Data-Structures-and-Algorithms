//can do recursively as well

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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

  //recursive
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    const inserted = (val, current = this.root) => {
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        return inserted(val, current.left);
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        return inserted(val, current.right);
      }
    };

    return inserted(val);
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

  //recursive
  find(value, node = this.root) {
    if (!node) return false;

    if (node.value === value) return true;

    if (value < node.value) return this.find(value, node.left);
    else return this.find(value, node.right);
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

  //iterative
  remove(val) {
    let node = this.root,
      parent = null;
    while (node) {
      if (val < node.val) {
        parent = node;
        node = node.left;
      } else if (val > node.val) {
        parent = node;
        node = node.right;
      } else if (node.left && node.right) {
        let minimumNode = node.right;
        while (minimumNode.left) {
          parent = minimumNode;
          minimumNode = minimumNode.left;
        }
        node.val = minimumNode.val;
        val = node.val;
        node = node.right;
        parent = null;
      } else {
        if (!parent) {
          this.root = node.left || node.right;
        } else if (parent.left === node) {
          parent.left = node.left || node.right;
        } else {
          parent.right = node.left || node.right;
        }
        break;
      }
    }
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

//       10
//  5            13
//2    7       11     16

let tree = new BinarySearchTree();
tree.root = new Node(11);
tree.root.right = new Node(15);
tree.root.left = new Node(10);

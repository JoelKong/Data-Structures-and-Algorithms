function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; i++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

function binary(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function bubble(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

function merge(arr1, arr2) {
  let temp = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      temp.push(arr2[j]);
      j++;
    } else {
      temp.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    temp.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    temp.push(arr2[j]);
    j++;
  }

  return temp;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let tempNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prevNode = this.get(idx - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let poppedVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, poppedVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(startVertex) {
    let data = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!adjacencyList[vertex]) return null;
      visited[vertex] = true;
      data.push(vertex);
      adjacencyList[vertex].map((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(startVertex);
    return data;
  }
  DFSIterative(startVertex) {
    let result = [];
    let stack = [startVertex];
    let visited = {};
    visited[startVertex] = true;

    while (stack.length) {
      let adjacencyVertex = stack.pop();
      result.push(adjacencyVertex);
      this.adjacencyList.map((neighbour) => {
        if (!visited[neighbour]) {
          stack.push(neighbour);
          visited[neighbour] = true;
        }
      });
    }
    return result;
  }

  BFS(startVertex) {
    let queue = [startVertex];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[startVertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList.map((neighbour) => {
        if (!visited[neighbour]) {
          queue.push(neighbour);
          visited[neighbour] = true;
        }
      });
    }
  }
}

class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = _hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = _hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }

  insertIterative(element) {
    this.val.push(element);
    let index = this.val.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.val[parent];
      if (parent >= element) break;
      this.val[parentIdx] = element;
      this.val[index] = parent;
      index = parentIdx;
    }
  }

  extractMax() {
    let max = this.val[0];
    let end = this.val.pop();

    while (this.val.length > 0) {
      this.val[0] = end;
      this.bubbleDown();
      return max;
    }
  }

  bubbleDown() {
    let idx = 0;
    let element = this.val[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,
        rightChild,
        swap = null;
      if (leftChildIdx < this.val.length) {
        leftChild = this.val[leftChildIdx];
        if (element < leftChild) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.val.length) {
        rightChild = this.val[rightChildIdx];
        if (
          (swap === null && element < rightChild) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.val[idx] = this.val[swap];
      this.val[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  BFS() {
    let data = [];
    queue = [];
    node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node);
      if (node.left) return traverse(node.left);
      if (node.right) return traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      current = this.root;
      while (true) {
        if (current.val === val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else found = true;
    }
    if (!found) return false;
  }

  findMinimumRightValue(node) {
    if (!node || !node.right) return null;
    else return node.right.val;
  }

  remove(val) {
    function _remove(val, node = this.root) {
      if (node) {
        if (val < node.val) {
          node.left = _remove(val, node.left);
        } else if (val > node.val) {
          node.right = _remove(val, node.right);
        } else if (node.left && node.right) {
          node.val = findMinimumRightValue(node);
          node.right = _remove(node.val, node.right);
        } else {
          node = node.left || node.right;
        }
      }
    }
    _remove(val);
  }
}

//min binary heap with priority queue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    //this.time = Date.now()        in case got same priority levels
  }
}

class PriorityQueue {
  constructor() {
    this.val = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.val.push(newNode);

    //bubble up
    let idx = this.val.length - 1;
    const element = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (element.priority >= parent.priority) break;
      this.val[parentIdx] = element;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const element = this.val[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < this.val.length) {
        leftChild = this.val[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.val.length) {
        rightChild = this.val[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

  dequeue() {
    const min = this.val[0];
    const end = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = end;
      this.bubbleDown();
      return min;
    }
  }
}

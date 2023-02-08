//min binary heap with priority queue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
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
      if (element.priority <= parent.priority) break;
      this.val[parentIdx] = element;
      this.val[idx] = parent;
      idx = parentIdx;
    }
  }
}

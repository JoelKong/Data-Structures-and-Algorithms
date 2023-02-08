class MaxBinaryHeap {
  constructor() {
    this.val = [];
  }

  insert(element) {
    this.val.push(element);
    let idx = this.val.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.val[parentIdx];
      if (element <= parent) break;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.val.length) {
        rightChild = this.val[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
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

  extractMax() {
    const max = this.val[0];
    const end = this.val.pop();
    if (this.val.length > 0) {
      this.val[0] = end;
      this.bubbleDown();
      return max;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(100));
console.log(heap);

// [41, 38, 33, 18, 27, 12]

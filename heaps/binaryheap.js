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
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(100));
console.log(heap);

// [41, 38, 33, 18, 27, 12]

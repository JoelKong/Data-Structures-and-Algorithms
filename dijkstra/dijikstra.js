// //basic naive
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }

//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//   }

//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    //directed graph just remove one connection
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  Dikjstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //Done
        //Build up a path to return to the end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          //find neighbour
          let nextNode = this.adjacencyList[smallest][neighbour];
          //calculate new distance to neighbour
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

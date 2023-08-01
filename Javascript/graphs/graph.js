//undirected graph
//adjacency list

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
    //directed graph just remove one connection
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    //delete edges in the vertex and all connected edges to it
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    //delete the actual key with the empty array
    delete this.adjacencyList[vertex];
  }

  //directed graph
  DFSRecursive(startVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!adjacencyList[vertex]) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].map((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    }
    dfs(startVertex);
    return result;
  }

  //neighbours start from end of the arr instead of start cause popping unlike recursion so answer is diff but still dfs
  //use stack
  DFSIterative(startVertex) {
    const stack = [startVertex];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[startVertex] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].map((neighbour) => {
        if (!visited(neighbour)) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  //use queue
  BFS(startVertex) {
    const queue = [startVertex];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[startVertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].map((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFSRecursive("A"));

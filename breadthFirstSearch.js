class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(data) {
    data instanceof Node
      ? this.children.push(data)
      : this.children.push(new Node(data));
    return this;
  }

  displayValues() {
    const list = [];
    const queue = [];
    queue.push(this);
    while (queue.length) {
      const item = queue.shift();
      list.push(item.data);
      if (item.children) item.children.forEach((child) => queue.push(child));
    }
    console.log(list);
  }

  // makes a breadth first search and returns the node
  BFS(data) {
    const queue = [];
    queue.push(this);
    while (queue.length) {
      const current = queue.shift();
      if (current.data == data) return current;
      if (current.children)
        current.children.forEach((child) => queue.push(child));
    }
    // if it doesnt exist return null
    return null;
  }
}

const test = new Node(1);
const test2 = new Node(5);
test.addChild(2);
test.addChild(3);
test2.addChild(19);
test.addChild(test2);

// testing for adding nodes to graph after inserting the parent node
test2.addChild(21);
test.displayValues(); //  [ 1, 2, 3, 5, 19, 21 ]
console.log(test.BFS(19)); // Node { data: 19, children: [] }
console.log(test.BFS(171)); // null

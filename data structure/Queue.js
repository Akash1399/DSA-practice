//! Queue data using array data type

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue.size());
console.log(queue.peek());
queue.print();

//! Queue data using Object data type
//*To have a constant time complexity in dequeue operation too

class ObjectQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.front === this.rear;
  }
  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const newQueue = new ObjectQueue();
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
console.log(newQueue.peek());
newQueue.print();
console.log(newQueue.size());



class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if (this.items.length) {
      return this.items[this.items.length - 1]; //Used to check the top element in stack
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const stack = new Stack();
// stack.push(3)
// stack.push(2)
// stack.push(1)
console.log(stack.peek());
stack.print();

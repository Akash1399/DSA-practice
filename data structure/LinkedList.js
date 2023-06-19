class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.size) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value){
    const node=new Node(value)
    if (!this.size){
      this.head=node
    }else{
      let prev=this.head
      while(prev.next){
        prev=prev.next
      }
      prev.next=node
      this.size++
    }
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Insertion is making on wrong Index");
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      const node = new Node(value);
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  print() {
    if (!this.size) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const linkedList = new LinkedList();
linkedList.print();
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.print();
linkedList.prepend(30);
linkedList.print();
linkedList.insert(40,2)
linkedList.append(50)
linkedList.print()
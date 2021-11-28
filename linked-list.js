class LinkedList {
  constructor() {
    this.head = null;
  }

  appendToList(val) {
    if(!this.head) {
      this.head = val;
      return this.head;
    }

    if(!this.head.next) {
      this.head.next = val;
      return this.head;
    }

    const prevValue = this.head;

    while(prevValue.next) {
      if(!prevValue.next.next) {
        prevValue.next.next = val;
        return this.head;
      }
      prevValue.next = prevValue.next.next;
    }

  }

  prependToList(val) {
    if(!this.head) {
      this.head = val;
      return this.head;
    }

    const nextValue = this.head;
    this.head = val;
    this.head.next = nextValue;
    return this.head;
  }

  deleteFromList() {
    if(!this.head) {
      return this.head;
    }

    if(!this.head.next) {
      this.head.next = null;
      return this.head;
    }

    const prevValue = this.head;

    while(prevValue.next) {
      if(prevValue.next.next) {
        prevValue.next.next = null;
        return this.head;
      }
      prevValue.next = null;
    }
  }

}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const linkedList = new LinkedList();

// console.log(linkedList.appendToList(new Node("Bla")))
// console.log(linkedList.appendToList(new Node("Bla")))
// console.log(linkedList.prependToList(new Node("Bla")))
// console.log(linkedList.prependToList(new Node("Bla-bla")))

console.log(linkedList.appendToList(new Node("Bla")))
console.log(linkedList.appendToList(new Node("Bla-bla")))
console.log(linkedList.appendToList(new Node("Bla-bla-bla")))
console.log(linkedList.deleteFromList())

class Deque {
  contructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) { // {1} this case is where there is empty
      this.addBack(element);
    } else if (this.lowestCount > 0) {  // {2} this case is where a item has been remove from the front of deque.
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) { // {3} third case where lowest count is zero
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4} since all items were moved to right, then index zero is empty to be asigned to a new value;
    }
  }

  addBack(element) {

  }

  removeFront() {

  }

  removeBack() {

  }

  peekBack() {

  }

  peekFront() {

  }

  isEmpty() {

  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {

  }

  size() {

  }
}

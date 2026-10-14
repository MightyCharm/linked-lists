function node(value) {
  return {
    value: value,
    nextNode: null,
  };
}

function linkedList() {
  let head = null;
  return {
    append(value) {
      const newNode = node(value);

      if (!head) {
        head = newNode;
        return;
      }
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = newNode;
    },

    prepend(value) {
      const newNode = node(value);
      if (!head) {
        head = newNode;
        return;
      }
      const temp = head;
      head = newNode;
      newNode.nextNode = temp;
    },

    size() {
      if (!head) return 0;
      let curr = head;
      let count = 1;
      while (curr.nextNode !== null) {
        count++;
        curr = curr.nextNode;
      }
      return count;
    },

    head() {
      if (!head) return undefined;
      return head.value;
    },

    tail() {
      if (!head) return undefined;
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      return curr.value;
    },

    at(index) {
      if (!head) return undefined;
      if (index === 0) return head.value;
      let curr = head;
      let count = 0;
      while (curr.nextNode !== null && count < index) {
        curr = curr.nextNode;
        count++;
      }
      if (count !== index) return undefined;
      return curr.value;
    },

    pop() {
      if (!head) return undefined;
      // at least one node in list
      let temp = head.value;
      head = head.nextNode;
      return temp;
    },

    contains(value) {
      if (!head) return false;
      let curr = head;
      while (curr.nextNode !== null) {
        if (curr.value === value) {
          break;
        }
        curr = curr.nextNode;
      }
      if (curr.value === value) return true;
      return false;
    },

    findIndex(value) {
      if (!head) return -1;
      let curr = head;
      let index = 0;
      while (curr.nextNode !== null) {
        if (curr.value === value) break;
        curr = curr.nextNode;
        index++;
      }
      if (curr.value === value) return index;
      return -1;
    },

    toString() {
      if (!head) {
        return "";
      }
      let curr = head;
      let output = `( ${curr.value} ) -> `;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
        output += `( ${curr.value} ) -> `;
      }
      output += curr.nextNode;
      return output;
    },

    insertAt(index, ...values) {
      if (index < 0) {
        throw new RangeError("Index must be 0 or higher.");
      }
      if (index > this.size()) {
        throw new RangeError("Index is too high.");
      }
      // case: index is 0 and we have or don't have a head already
      if (index === 0) {
        if (!head) {
          const newNode = node(values[0]);
          head = newNode;
          let curr = head;
          for (let i = 1; i < values.length; i++) {
            const newNode = node(values[i]);
            curr.nextNode = newNode;
            curr = curr.nextNode;
          }
        } else {
          let curr = head;
          for (let i = values.length - 1; i >= 0; i--) {
            const newNode = node(values[i]);
            newNode.nextNode = curr;

            curr = newNode;
            head = curr;
          }
        }
        return;
      }
      // case: index bigger than 0
      let prev = null;
      let curr = head;
      let count = 0;
      while (count < index && count < this.size()) {
        prev = curr;
        curr = curr.nextNode;
        count++;
      }
      for (let i = values.length - 1; i >= 0; i--) {
        const newNode = node(values[i]);
        newNode.nextNode = curr;
        prev.nextNode = newNode;
        curr = newNode;
      }
    },

    removeAt(index) {
      if (index < 0) {
        throw new RangeError("Index must be 0 or higher.");
      }
      if (index >= this.size()) {
        throw new RangeError("Index is too high.");
      }
      if (index === 0) {
        if (head) {
          head = head.nextNode;
        }
        return;
      }
      let prev = null;
      let curr = head;
      let next = null;
      let count = 0;
      while (count < index && count < this.size()) {
        prev = curr;
        curr = curr.nextNode;
        count++;
      }
      // curr is node to remove
      next = curr.nextNode;
      prev.nextNode = next;
    },
  };
}

const list = linkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");

list.removeAt(1);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());
console.log(list.size());

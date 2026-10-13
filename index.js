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
  };
}

const list = linkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");

list.insertAt(0, "X");
console.log(list.toString());

const list2 = linkedList();
list2.append("A");
list2.append("B");
list2.append("C");
list2.append("D");
list2.insertAt(2, "X", "Y");
console.log(list2.toString());

const list3 = linkedList();
list3.append("A");
list3.append("B");
list3.insertAt(2, "C", "D");
console.log(list3.toString());

const list4 = linkedList();
list4.append("A");
list4.append("D");
list4.insertAt(1, "B", "C");
console.log(list4.toString());

const lastList = linkedList();
lastList.append(1);
lastList.append(2);
lastList.append(3);
console.log(lastList.toString());

lastList.insertAt(1, 10, 11);
console.log(lastList.toString());

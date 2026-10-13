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
  };
}

const list = linkedList();

list.append("dog");
list.append("cat");
list.append("bird");
list.append("worm");
list.append("shark");

console.log(list.findIndex("dog"));

console.log(list.findIndex("bird"));

console.log(list.findIndex("shark"));

console.log(list.findIndex("snake"));

list.append("dog");
console.log(list.findIndex("dog"));

list.append(42);
console.log(list.findIndex(42));
console.log(list.findIndex("42"));

list.append(null);
console.log(list.findIndex(null));

const empty = linkedList();
console.log(empty.findIndex("dog"));

const single = linkedList();
single.append("shark");
console.log(single.findIndex("shark"));

console.log(single.findIndex("dog"));

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

    contains(target) {
      if (!head) return false;
      let curr = head;
      while (curr.nextNode !== null) {
        if (curr.value === target) {
          break;
        }
        curr = curr.nextNode;
      }
      if (curr.value === target) return true;
      return false;
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

console.log(list.contains("dog"));

list.append("dog");
list.append("cat");
list.append("bird");
list.append("worm");
list.append("shark");
console.log(list.contains("dog"));

console.log(list.contains("bird"));

console.log(list.contains("shark"));

console.log(list.contains("snake"));

list.append(42);
console.log(list.contains(42));
console.log(list.contains("42"));

list.append(null);
console.log(list.contains(null));

list.append("dog");
console.log(list.contains("dog"));

const single = linkedList();
single.append("shark");
console.log(single.contains("shark"));
console.log(single.contains("dog"));

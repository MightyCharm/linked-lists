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

console.log(list.tail());

list.append("dog");
console.log(list.tail());

list.append("cat");
list.append("bird");
console.log(list.tail());

list.prepend("shark");
console.log(list.tail());

list.append("worm");
console.log(list.tail());

const list2 = linkedList();
list2.prepend("snake");
list2.prepend("frog");

console.log(list2.tail());

list2.append("shark");
console.log(list2.tail());

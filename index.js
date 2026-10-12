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

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(3));

console.log(list.at(4));
console.log(list.at(99));

console.log(list.at(-1));

const empty = linkedList();
console.log(empty.at(0));

const single = linkedList();
single.append("shark");
console.log(single.at(0));
console.log(single.at(1));

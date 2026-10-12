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

console.log(list.size());

list.append("dog");
console.log(list.size());

list.append("cat");
list.append("bird");
console.log(list.size());

list.prepend("shark");
console.log(list.size());

list.prepend("frog");
console.log(list.size());

console.log(list.toString());

const list2 = linkedList();
list2.prepend("worm");
list2.prepend("snake");
console.log(list2.size());

list2.append("shark");
console.log(list2.size());
console.log(list2.toString());

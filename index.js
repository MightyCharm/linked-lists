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
console.log(list.toString());

list.append("dog");
console.log(list.toString());

list.append("cat");
list.append("bird");
console.log(list.toString());

list.prepend("shark");
console.log(list.toString());

const list2 = linkedList();
list2.prepend("worm");
console.log(list2.toString());

list2.prepend("snake");
list2.prepend("frog");
console.log(list2.toString());

list2.append("shark");
console.log(list2.toString());

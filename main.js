import { linkedList } from "./linked-list.js";

const list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("monkey");
console.log(list.toString());

console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("monkey"));
console.log(list.findIndex("hamster"));
list.insertAt(2, "Lion", "Eagle");
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());

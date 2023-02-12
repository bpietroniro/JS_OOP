function newStack() {
  const stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(val => console.log(val));
    },
  };
}

let stack = newStack();
stack.push(5);
stack.push(6);
stack.printStack();

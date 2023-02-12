function subtract(a, b) {
  return a - b;
}

function makeSub() {
  return function(num) {
    return subtract(num, 5);
  };
}

const sub5 = makeSub();

console.log(sub5(10));
console.log(sub5(20));

function makeSubN(n) {
  return function(a) {
    return subtract(a, n);
  };
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10));
console.log(sub4(20));
console.log(sub7(10));
console.log(sub7(20));

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100));
console.log(divideBy2(100));

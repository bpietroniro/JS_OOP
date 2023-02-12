function greet(arg1, arg2) {
  console.log(arg1[0].toUpperCase() + arg1.slice(1) + ', ' + arg2 + '!');
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'Hello');
sayHello('Brandon');

let sayHi = partial(greet, 'Hi');
sayHi('Sarah');

function functionMaker() {
  let runningTotal = 0;
  
  function add(num) {
    runningTotal += num;
    console.log(runningTotal);
  }

  function subtract(num) {
    runningTotal -= num;
    console.log(runningTotal);
  }

  return [add, subtract];
}

let [add, subtract] = functionMaker();

add(1);
add(42);
subtract(39);
add(6);

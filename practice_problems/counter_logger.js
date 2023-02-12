function makeCounterLogger(startNum) {
  return function(endNum) {
    if (startNum < endNum) {
      for (let n = startNum; n <= endNum; n += 1) {
        console.log(n);
      }
    } else {
      for (let n = startNum; n >= endNum; n -= 1) {
        console.log(n);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

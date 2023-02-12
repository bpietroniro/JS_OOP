function makeMultipleLister(number) {
  return function() {
    let multiple = number;
    while (multiple < 100) {
      console.log(multiple);
      multiple += number;
    }
  };
}

let lister = makeMultipleLister(13);
lister();

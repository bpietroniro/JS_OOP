function makeList() {
  let items = [];
  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      let index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },
  };
}


let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();

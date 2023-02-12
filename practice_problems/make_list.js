function makeList() {
  let todolist = [];
  return function(todo) {
    if (todo === undefined) {
      if (todolist.length === 0) {
        console.log("The list is empty.");
      } else {
        todolist.forEach(todo => console.log(todo));
      }
    } else {
      if (todolist.includes(todo)) {
        let index = todolist.indexOf(todo);
        todolist.splice(index, 1);
        console.log(`${todo} removed!`);
      } else {
        todolist.push(todo);
        console.log(`${todo} added!`);
      }
    }
  };
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();

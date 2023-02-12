function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },

    setPrice(amount) {
      if (amount < 0) {
        alert('Invalid price');
      } else {
        this.price = amount;
      }
    },
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

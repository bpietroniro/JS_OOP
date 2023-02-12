function makeCar(acceleration, deceleration) {
  return {
    speed: 0,
    acceleration,
    deceleration,
    accelerate() {
      this.speed += this.acceleration;
    },
    brake() {
      this.speed -= this.deceleration;
      if (this.speed < 0) this.speed = 0;
    },
  };
}

let hatchback = makeCar(9);



function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.' +
        ' I ' + (this.visited ? 'have' : "haven't") + ' visited ' +
        this.name + '.';
    },
    visitCountry() {
      this.visited = true;
    }
  };
}

const person = {
  name: "Joseph Mutua",
  age: "23",
};

class Animal {
  constructor(species, age) {
    this.species = species;
    this.age = age;
  }

  greeting() {
    console.log(`I brought a ${this.space}, of ${this.age} years old`);
  }
}


module.exports = person, Animal;

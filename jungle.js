class Jungle {
  constructor() {
    this.animals = [];
    this.foods = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  addFood(food) {
    this.foods.push(food);
  }

  soundOff() {
    this.animals.forEach((animal) =>
      console.log(`${animal.makeSound()} : Energy -- ${animal.energy}`)
    );
  }
}

class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}

class Fish extends Food {
  constructor() {
    super("Fish", 10);
  }
}
class Meat extends Food {
  constructor() {
    super("Meat", 15);
  }
}

class Grain extends Food {
  constructor() {
    super("Grain", 5);
  }
}

class Animals {
  constructor(sound, energy = 5) {
    this.sound = sound;
    this.energy = energy;
  }

  makeSound() {
    this.energy -= 3;
    return this.sound;
  }

  eat(food) {
    this.energy += food.energy;
  }

  sleep() {
    this.energy += 10;
  }
}

class Tiger extends Animals {
  constructor(sound, energy) {
    super(sound, energy);
  }

  sleep() {
    this.energy += 5;
  }
  eat(food) {
    if (food.name === "Grain") {
      return "I cant` eat that!";
    }

    this.energy += food.energy;
  }
}

class Monkey extends Animals {
  constructor(sound, energy) {
    super(sound, energy);
  }

  eat(food) {
    this.energy += 2;
  }
  makeSound() {
    this.energy -= 4;
    return this.sound;
  }

  play() {
    if (this.energy >= 8) {
      this.energy -= 8;
      return "Ooh ooh aah aah!";
    }

    return `I\`m too tired`;
  }
}
class Snake extends Animals {
  constructor(sound, energy) {
    super(sound, energy);
  }
}

const jungle = new Jungle();
const tiger = new Tiger("Roar!", 20);
const monkey = new Monkey("Oooo Oooo!", 15);
const snake = new Snake("Fshh!", 8);
const fish = new Fish();
const grain = new Grain();
const meat = new Meat();

jungle.addAnimal(tiger);
jungle.addAnimal(monkey);
jungle.addAnimal(snake);

monkey.makeSound();
monkey.play();
console.log(monkey.play());
console.log(monkey.energy);
tiger.eat(meat);
console.log(tiger.energy);
console.log(tiger.eat(grain));

// jungle.soundOff();

// starting data
const animalsSeen = ['🐶','🦊','🦁','🐻','🐷','🐝','🐌'];
const bigAnimals = ['🦁','🐻'];
let sawBigAnimal = false;

// the old way (very C like)
for (let i = 0; i < animalsSeen.length; i++) {
  for (let j = 0; j < bigAnimals.length; j++) {
    if (animalsSeen[i] === bigAnimals[j]) {
      sawBigAnimal = true;
      break;
    }
  }
  console.log(i);
  if (sawBigAnimal) {
    break;
  }
}
console.log(sawBigAnimal);

// .forEach(), ugly code, runs across the whole array, worse than above
animalsSeen.forEach((animal, index) => {
  sawBigAnimal = !!bigAnimals.find(bigAnimal => bigAnimal === animal) || sawBigAnimal;
  console.log(index);
});
console.log(sawBigAnimal);

// .some(), clean code, only runs until first match
sawBigAnimal = animalsSeen.some((animal, index) => {
  console.log(index);
  return bigAnimals.some(bigAnimal => bigAnimal === animal);
});
console.log(sawBigAnimal);


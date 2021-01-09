// simple example
const array = [1,2,3,4];
const doubled = array.map((x) => {
  return x * 2;
});
console.log(doubled);

// shorthand
const shorthand = array.map(x => x * 2);
console.log(shorthand);

// more complex
const tempsDegC = [12, 16, 19, -1, 22, 9];
const jumperDays = tempsDegC.map(temp => {
  if (temp < 18) {
    return 'jumper';
  }
  return 'no jumper';
});
console.log(jumperDays);

// using the index
const fruit = ['🍎','🍊','🍐','🍌'].map(
    (item, index) => {
      return {index, item};
    }
);
console.log(fruit);
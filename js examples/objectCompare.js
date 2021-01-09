const _ = require('lodash');

// objects are not directly comparable
let a = {name: 'James', age: '22'};
let b = {name: 'James', age: '22'};
console.log(a === b); // will be false

// stringify to the rescue?
let jsonA = JSON.stringify(a);
let jsonB = JSON.stringify(b);
console.log(jsonA === jsonB); 
// will be true

// only if properties are in the same order, lets swap them in b
b = {age: b.age, name: b.name};
jsonA = JSON.stringify(a);
jsonB = JSON.stringify(b);
console.log(jsonA === jsonB); 
// will be false

// a simple props compare function
const objectsMatch = (a, b, props) => {
  let different = false;
  props.forEach(prop => {
    // set different true if a.prop and b.prop are different
    // of that result with different so matching properties done 'unset' it after it's been set
    // this is called masking
    differnet = different || a[prop] !== b[prop];
  });
  return !differnet;
}

console.log(objectsMatch(a, b, ['name', 'age']));

// lodash
console.log(_.isEqual(a,b));
let axios = require('axios');

// simple promise
const later = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Finished'), 1000);
});

later.then((result) => {
    console.log(result); // prints 'Finished'
});

// Promise that throws and error when random > 1
const later2 = new Promise((res, rej) => {
  setTimeout(() => {
    const random = Math.random() * 10;
    if (random > 1) {
      rej(new Error('Above 1'))
    }
    res('Finished')
  }, 1000);
});

later2.then((result) => {
    console.log(result);
})
.catch(e => console.error(e.message));

// network request promise
const pAPI = 'https://pokeapi.co/api/v2'
const getPokemon = (name) => {
  // returns a promise
  return axios.get(`${pAPI}/pokemon/${name}`);
}

// logs 132
getPokemon('ditto').then(
  result => console.log(result.data.id)
).catch(
  err => console.log(err.message)
);

// logs 404 not found
getPokemon('dittos').then(
  result => console.log(result.data.id)
).catch(
  err => console.log(err.message)
);
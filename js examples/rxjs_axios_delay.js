const axios = require('axios');
const { forkJoin, from, defer, concat } = require('rxjs');
const { map, take, delay, toArray } = require('rxjs/operators');

const pokemon = ['ditto', 'bulbasaur', 'charizard', 'pikachu'];

const obs1 = pokemon.map((pk, index) => {
  return from(new Promise(resolve => setTimeout(async () => {
    const prom = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pk}`);
    resolve(prom);
  }, index*1000))).pipe(map(res => {
    console.log('fetched: ', pk);
    return {id: res.data.id, name: res.data.name, height: res.data.height};
  }))
})

forkJoin(obs1).subscribe(data => {
  console.log(data);
});

const api = `https://pokeapi.co/api/v2/pokemon`;
const obs = pokemon.map(pk => {
  return defer(() => {
      return axios.get(`${api}/${pk}`)
  }).pipe(
    delay(1000),
    map(res => {
      return {id: res.data.id,
                   name: res.data.name
             };
    }
  ));
});

concat(...obs).pipe(
  take(obs.length),
  toArray()
).subscribe(data => {
  console.log(data);
});
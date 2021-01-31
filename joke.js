const button = document.querySelector('button');
const container = document.querySelector('#jokeContainer');
const list = document.querySelector('#list');


const displayJoke = async () => {
  container.classList.remove('hide');
  const jokeText = await getJoke();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  list.append(newLI);
  window.scrollBy(0,200);
}

const getJoke = async () => {
  const config = { headers: { Accept: 'application/json' } }
  const res = await axios.get(`https://icanhazdadjoke.com/`, config);
  return res.data.joke;
}

button.addEventListener('click', displayJoke);
const URL_ENDPOINT = '/api/todolist/';

async function fetchAPI() {
  const data = await fetch(URL_ENDPOINT); // fetch API
  const { results } = await data.json(); // convert/parse body text to json
  return results;
}

export default fetchAPI;

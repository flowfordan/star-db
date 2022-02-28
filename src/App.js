import logo from './logo.svg';
import './App.css';

function App() {

class SwapiService {

  _apiBase = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}` + `, recieved ${res.status}`);
    }

    return await res.json();
  };

  getAllPeople() {
    return this.getResource(`/people/`);
  };

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  };

};

const swapi = new SwapiService();

swapi.getAllPeople().then((body) => {
  console.log(body)
})

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;

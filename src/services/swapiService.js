export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}` + `, recieved ${res.status}`);
      }
  
      return await res.json();
    };
    
    //getting persons
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    };
  
    getPerson(id) {
      return this.getResource(`/people/${id}/`);
    };
    
    //getting planets
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    };
  
    getPlanet(id) {
      return this.getResource(`/planets/${id}/`);
    };
  
    //getting starships
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    };
  
    getStarship(id) {
      return this.getResource(`/starships/${id}/`);
    };
  
  };
  
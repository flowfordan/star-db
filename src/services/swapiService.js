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
      return res.results.map(this._transformPerson);
    };
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    };
    

    //getting planets
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    };
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet)
    };
  

    //getting starships
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    };
  
    async getStarship(id) {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    };
  

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      const id = item.url.match(idRegExp)[1];
      return id
    };



    // transformation api data

    _transformStarship(starship){
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.lenght,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    };

    _transformPerson(person){
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      }
    };

    _transformPlanet(planet) {
      return {
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
      }
    }
  };
  
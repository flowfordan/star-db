import React from "react";
import ItemList from "../ItemList/ItemList";
import withData from "../hocHelpers/withData";
import SwapiService from "../../services/swapiService";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const CharacterList = withData(ItemList, getAllPeople);
const StarshipList = withData(ItemList, getAllStarships);
const PlanetList = withData(ItemList, getAllPlanets);

export { CharacterList, StarshipList, PlanetList };

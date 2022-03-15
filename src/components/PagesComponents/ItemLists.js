import React from "react";
import ItemList from "../ItemList/ItemList";
import withDataList from "../hocHelpers/withDataList";
import SwapiService from "../../services/swapiService";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const CharacterList = withDataList(ItemList, getAllPeople);
const StarshipList = withDataList(ItemList, getAllStarships);
const PlanetList = withDataList(ItemList, getAllPlanets);

export { CharacterList, StarshipList, PlanetList };

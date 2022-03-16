import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapiService";
import withDataDetails from "../hocHelpers/withDataDetails";
import { SwapiServiceConsumer } from "../../swapiServiceContext/swapiServiceContext";
import withSwapiService from "../hocHelpers/withSwapiService";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;



const CharacterDetails = withDataDetails(ItemDetails, getPerson, getPersonImage);
const StarshipDetails = withDataDetails(ItemDetails, getStarship, getStarshipImage);
const PlanetDetails = withDataDetails(ItemDetails, getPlanet, getPlanetImage);

export { CharacterDetails, StarshipDetails, PlanetDetails };

import ItemDetails from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapiService";
import withDataDetails from "../hocHelpers/withDataDetails";

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

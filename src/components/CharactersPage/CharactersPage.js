import React from "react";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import styles from './CharactersPage.module.css';
import withData from "../hocHelpers/withDataList";
import { 
    CharacterList, 
    StarshipList, 
    PlanetList } from "../PagesComponents/ItemLists";
import { 
    CharacterDetails, 
    StarshipDetails, 
    PlanetDetails } from "../PagesComponents/Details";


const Row = ({ left, right }) => {
    return(
        <div className={styles.items}>
            <div className={styles.itemsList}>
                {left}
            </div>
            <div className={styles.itemInfo}>
                {right} 
            </div>
        </div>  
    );
};



export default class CharactersPage extends React.Component{

    swapiService = new SwapiService();
    
    constructor(props){
        super(props);
        this.state = {
            selectedItem: null,
            hasError: false,
        };
    };


    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    };

    componentDidCatch(){
        this.setState({hasError: true});
    };

    render(){
        
        
    if(this.state.hasError){
            return(
                <ErrorIndicator />
            )
        };

        const charactersList = (
            <CharacterList
            onItemSelected={this.onItemSelected}
            selectedItem={this.state.selectedItem}
            renderItem={(item)=> `${item.name}, ${item.birthYear}`}
            itemType={'Character'} />
        );

        const personDetails = (
            <CharacterDetails 
            itemId={this.state.selectedItem}
            itemType={'Character'}>
                <Record field='birthYear' label='Birth Year'/> 
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </CharacterDetails>
        );

        const starshipsList = (
            <StarshipList
            onItemSelected={this.onItemSelected}
            selectedItem={this.state.selectedItem}
            itemType={'Starship'}
            renderItem={(item)=> `${item.name}`} />
        );


        const starshipDetails = (
            <StarshipDetails 
            itemId={this.state.selectedItem}
            itemType={'Starship'}>
                <Record field='model' label='Model'/> 
                <Record field='length' label='Length (m)'/>
                <Record field='costInCredits' label='Cost (g.c)'/>
            </StarshipDetails>
        );
    
        return(
            <React.Fragment>
            <div>
                <Row left={charactersList} right={personDetails}/>
            </div>
            <div>
                <Row left={starshipsList} right={starshipDetails}/>
            </div>
            </React.Fragment>
        )
    };
};



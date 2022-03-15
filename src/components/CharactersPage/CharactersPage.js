import React from "react";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import styles from './CharactersPage.module.css';
import withData from "../hocHelpers/withData";


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


    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    };

    componentDidCatch(){
        this.setState({hasError: true});
    };

    render(){
        
    const {getPersonImage, getStarshipImage} = this.swapiService;
        
    if(this.state.hasError){
            return(
                <ErrorIndicator />
            )
        };

        const charactersList = (
            <ItemList
            
            onItemSelected={this.onPersonSelected}
            selectedItem={this.state.selectedItem}
            getData={this.swapiService.getAllPeople}
            renderItem={(item)=> `${item.name}, ${item.birthYear}`}
            itemType={'Character'} />
        );

        const personDetails = (
            <ItemDetails 
            itemId={this.state.selectedItem}
            getData={this.swapiService.getPerson}
            getImageUrl={getPersonImage}
            itemType={'Character'}>
                <Record field='birthYear' label='Birth Year'/> 
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        );

        // const starshipsList = (
        //     <ListWithData
        //     onItemSelected={this.onPersonSelected}
        //     selectedItem={this.state.selectedItem}
        //     getData={this.swapiService.getAllStarships}
        //     renderItem={(item)=> `${item.name}`} />
        // );


        // const starshipDetails = (
        //     <ItemDetails 
        //     itemId={this.state.selectedItem}
        //     getData={this.swapiService.getStarship}
        //     getImageUrl={getStarshipImage}
        //     itemType={'Starship'}>
        //         <Record field='model' label='Model'/> 
        //         <Record field='length' label='Length (m)'/>
        //         <Record field='costInCredits' label='Cost (g.c)'/>
        //     </ItemDetails>
        // );
    
        return(
            <React.Fragment>
            <div>
                <Row left={charactersList} right={personDetails}/>
            </div>
            {/* <div>
                <Row left={starshipsList} right={starshipDetails}/>
            </div> */}
            </React.Fragment>
        )
    };
};



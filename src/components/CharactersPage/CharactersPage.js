import React from "react";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import styles from './CharactersPage.module.css';


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
        if(this.state.hasError){
            return(
                <ErrorIndicator />
            )
        };

        const itemList = (
            <ItemList
            renderItem={(item)=> `${item.name}, ${item.birthYear}`} 
            onItemSelected={this.onPersonSelected}
            selectedItem={this.state.selectedItem}
            getData={this.swapiService.getAllPeople}/>
        );

        const personDetails = (
            <PersonDetails 
            personId={this.state.selectedItem}/>
        );
    
        return(
            <Row left={itemList} right={personDetails}/>
        )
    };
};



import React from "react";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import styles from './CharactersPage.module.css';


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

        return(
            <div className={styles.items}>
                    <div className={styles.itemsList}>
                        <ItemList onItemSelected={this.onPersonSelected}
                        selectedItem={this.state.selectedItem}
                        getData={this.swapiService.getAllPeople}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <PersonDetails personId={this.state.selectedItem}/>
                    </div>
            </div>
        )
    };
};
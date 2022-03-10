import React from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import styles from './CharactersPage.module.css';


export default class CharactersPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPerson: null,
            hasError: false,
        };
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
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
                        selectedPerson={this.state.selectedPerson}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
            </div>
        )
    };
};
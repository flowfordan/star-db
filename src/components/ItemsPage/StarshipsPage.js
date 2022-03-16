import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import { StarshipList } from "../PagesComponents/ItemLists";
import { StarshipDetails } from "../PagesComponents/Details";

import Row from "./Row";

export default class StarshipsPage extends React.Component{
    
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
            
                <Row left={starshipsList} right={starshipDetails}/>
            
            </React.Fragment>
        )
    };
};



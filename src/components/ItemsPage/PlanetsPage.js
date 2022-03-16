import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";

import { PlanetList } from "../PagesComponents/ItemLists";
import { PlanetDetails } from "../PagesComponents/Details";

import Row from "./Row";



export default class PlanetsPage extends React.Component{
    
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

        const planetsList = (
            <PlanetList
            onItemSelected={this.onItemSelected}
            selectedItem={this.state.selectedItem}
            itemType={'Planet'}
            renderItem={(item)=> `${item.name}`} />
        );


        const planetDetails = (
            <PlanetDetails 
            itemId={this.state.selectedItem}
            itemType={'Planet'}>
                <Record field='population' label='Population'/> 
                <Record field='rotationPeriod' label='Rotation Period (hours)'/>
                <Record field='diameter' label='Diameter (km)'/>
            </PlanetDetails>
        );
    
        return(
            <React.Fragment>
            
                <Row left={planetsList} right={planetDetails}/>
            
            </React.Fragment>
        )
    };
};



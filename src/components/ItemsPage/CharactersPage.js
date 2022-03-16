import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import { 
    CharacterList, 
} from "../PagesComponents/ItemLists";
import { 
    CharacterDetails, 
} from "../PagesComponents/Details";

import Row from "./Row";


export default class CharactersPage extends React.Component{
    
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

        const characterDetails = (
            <CharacterDetails 
            itemId={this.state.selectedItem}
            itemType={'Character'}>
                <Record field='birthYear' label='Birth Year'/> 
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </CharacterDetails>
        );
    
        return(
            <React.Fragment>
            
                <Row left={charactersList} right={characterDetails}/>

            </React.Fragment>
        )
    };
};



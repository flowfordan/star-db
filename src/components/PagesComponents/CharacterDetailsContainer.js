import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { CharacterDetails } from "../PagesComponents/Details";


const CharacterDetailsContainer = (props) => {

    let params = useParams();

    return(
    
        <CharacterDetails 
        itemId={params.id}
        itemType={'Character'}>
                <Record field='birthYear' label='Birth Year'/> 
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
        </CharacterDetails>
    )
};

export default CharacterDetailsContainer;

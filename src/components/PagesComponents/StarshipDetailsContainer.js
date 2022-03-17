import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import { StarshipDetails } from "../PagesComponents/Details";
import { useParams } from "react-router-dom";


const StarshipDetailsContainer = (props) => {

    let params = useParams();

    return(
    
        <StarshipDetails 
        itemId={params.id}
        itemType={'Starship'}>
            <Record field='model' label='Model'/> 
            <Record field='length' label='Length (m)'/>
            <Record field='costInCredits' label='Cost (g.c)'/>
        </StarshipDetails>
    )
};

export default StarshipDetailsContainer;

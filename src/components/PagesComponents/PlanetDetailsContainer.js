import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";
import { PlanetDetails } from "../PagesComponents/Details";


const PlanetDetailsContainer = (props) => {

    let params = useParams();

    return(
    
        <PlanetDetails 
        itemId={params.id}
        itemType={'Planet'}>
                <Record field='population' label='Population'/> 
                <Record field='rotationPeriod' label='Rotation Period (hours)'/>
                <Record field='diameter' label='Diameter (km)'/>
        </PlanetDetails>
    )
};

export default PlanetDetailsContainer;

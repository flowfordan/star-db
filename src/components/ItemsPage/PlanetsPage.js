import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import { PlanetList } from "../PagesComponents/ItemLists";
import { Routes, Route} from "react-router-dom";
import styles from './ItemsPage.module.css';
import PlanetDetailsContainer from "../PagesComponents/PlanetDetailsContainer";



const PlanetsPage = (props) => {

    const planetsList = (
        <PlanetList
        itemType={'Character'}
        renderItem={(item)=> `${item.name}`} />
    );

    const planetsDetails = (
        <div className={styles.itemInfo}>
            <PlanetDetailsContainer/>
        </div>
    );

    return(
        <React.Fragment>
            
            <div className={styles.items}>
                <div className={styles.itemsList}>
                    {planetsList}
                </div>
                <Routes>
                    <Route path=':id' element={planetsDetails} /> 
                </Routes>
            </div>
        
        </React.Fragment>
    )
};

export default PlanetsPage;



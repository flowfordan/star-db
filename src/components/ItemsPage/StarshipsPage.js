import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import { StarshipList } from "../PagesComponents/ItemLists";
import { Routes, Route} from "react-router-dom";
import styles from './ItemsPage.module.css';
import StarshipDetailsContainer from "../PagesComponents/StarshipDetailsContainer";


const StarshipsPage = (props) => {

    const starshipsList = (
        <StarshipList
        itemType={'Starship'}
        renderItem={(item)=> `${item.name}`} />
    );

    const starshipsDetails = (
        <div className={styles.itemInfo}>
            <StarshipDetailsContainer/>
        </div>
    );

    return(
        <React.Fragment>
            
            <div className={styles.items}>
                <div className={styles.itemsList}>
                    {starshipsList}
                </div>
                <Routes>
                    <Route path=':id' element={starshipsDetails} /> 
                </Routes>
            </div>
        
        </React.Fragment>
    )
};

export default StarshipsPage;

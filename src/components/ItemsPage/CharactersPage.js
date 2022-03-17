import React from "react";
import ErrorIndicator from "../common/ErrorIndicator/ErrorIndicator";
import { CharacterList } from "../PagesComponents/ItemLists";
import { Routes, Route} from "react-router-dom";
import styles from './ItemsPage.module.css';
import CharacterDetailsContainer from "../PagesComponents/CharacterDetailsContainer";



const CharactersPage = (props) => {

    const charactersList = (
        <CharacterList
        itemType={'Character'}
        renderItem={(item)=> `${item.name}`} />
    );

    const charactersDetails = (
        <div className={styles.itemInfo}>
            <CharacterDetailsContainer/>
        </div>
    );

    return(
        <React.Fragment>
            
            <div className={styles.items}>
                <div className={styles.itemsList}>
                    {charactersList}
                </div>
                <Routes>
                    <Route path=':id' element={charactersDetails} /> 
                </Routes>
            </div>
        
        </React.Fragment>
    )
};

export default CharactersPage;

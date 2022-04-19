import styles from './ItemDetails.module.css'
import { Box } from '@mui/material';
import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import { useParams } from 'react-router-dom';


const Record = ({ currentItem, field, label }) => {
    return(
        <li className={styles.infoListGroup}>
            <span className={styles.infoListTerm}>
                {label}
            </span>
            <span className={styles.infoListEl}>
                {currentItem[field]}
            </span>
        </li> 
    )
};

export {
    Record
};


const ItemDetails = (props) => {

    const {data} = props;

    const {currentItem, image, isLoading, error} = data;
    
        const CharacterView = () => {

            const { name } = currentItem;

            return(
                <React.Fragment>
                    <Box className={`${styles.card} ${styles.basicBox}`}>
                        <div className={`${styles.cardName} ${styles.typoItemName}`}>
                            {name}
                        </div>
                        <div className={`${styles.cardImage} ${styles.cardObjBackground}`} >
                            <img  className={styles.cardImageBody}
                            src={image}
                            alt={`${props.itemType}`}>
                            </img>
                        </div>
                
                        <div className={`${styles.cardInfo} 
                        ${styles.typoItemsInfo}`}>
                            <ul className={styles.infoList}>
                                {
                                React.Children.map(props.children, 
                                    (child) => {
                                        return React.cloneElement(child, {currentItem})})
                                }
                            </ul>
                        </div>

                    </Box>
                </React.Fragment>
            )
        };

        const PreloaderView = () => {
            return(
                <React.Fragment>
                    <Box className={styles.basicBox}>
                        <Spinner />
                    </Box>
                </React.Fragment>

            )
        };

        const hasData = !(isLoading || error);
        const errorMessage = error? <ErrorIndicator /> : null;
        const loading = isLoading? <PreloaderView /> : null;
        const renderedContent = !hasData? null : <CharacterView />;

        return(
            <div className={styles.cardWrapper}>
            <div className={`${styles.typoChunkHeader} ${styles.cardHeader}`}>
                {props.itemType}
            </div>
                {errorMessage}
                {loading}
                {renderedContent}          
            </div> 
        )
};

export default ItemDetails;

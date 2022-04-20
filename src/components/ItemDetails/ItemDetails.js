import styles from './ItemDetails.module.css'
import { Box } from '@mui/material';
import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import { useParams } from 'react-router-dom';


const Record = ({ currentItem, field, label }) => {
    return(
        <li className={styles.infoRow}>
            <span className={styles.infoTerm}>
                {label}
            </span>
            <span className={styles.infoEl}>
                {currentItem[field]}
            </span>
        </li> 
    )
};

export { Record };


const ItemDetails = (props) => {

    const {data} = props;

    const {currentItem, image, isLoading, error} = data;
    
        const CharacterView = () => {

            const { name } = currentItem;

            return(
                <React.Fragment>
                    <Box className={styles.card}>
                        <div className={styles.cardName}>
                            {name}
                        </div>
                        <div className={styles.cardImage}>
                            <img  className={styles.cardImageBody}
                            src={image}
                            alt={props.itemType}>
                            </img>
                        </div>
                
                        <div className={styles.cardInfo}>
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
                <>
                    <Spinner />
                </>

            )
        };

        const hasData = !(isLoading || error);
        const errorMessage = error? <ErrorIndicator /> : null;
        const loading = isLoading? <PreloaderView /> : null;
        const renderedContent = !hasData? null : <CharacterView />;

        return(
            <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
                {props.itemType}
            </div>
                {errorMessage}
                {loading}
                {renderedContent}          
            </div> 
        )
};

export default ItemDetails;

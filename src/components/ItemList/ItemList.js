import styles from './ItemList.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Box } from '@mui/material';
import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import { Link, NavLink } from 'react-router-dom';
import { PagesNums } from './PagesNums';


const ItemList = (props) => {

    console.log('item list props', props)
    const {data} = props;

    const {itemList, isLoading, error, pagesCount} = data;

    const listItems = itemList.map((item) => {
        const {id} = item;

        const label = props.renderItem(item);
        
        return (
            <li className={globalStyles.infoListGroup} 
            key={id}>
                <NavLink to={`${id}`} key={id}
                className={({isActive})=> isActive? globalStyles.infoListElSelected:globalStyles.infoListElSelect}>
                    {label}
                </NavLink>
            </li>  
        )
    });   
    

    const ListView = () => {
        return(
            <>
                <Box className={`${styles.list} ${globalStyles.basicBox}`}>
                        <div className={`${styles.listItems} ${globalStyles.typoItemsInfo}`}>
                            <ul className={globalStyles.infoList}>
                                {listItems}
                            </ul>
                        </div>
                </Box>
            </>
        )
    };

    const PreloaderView = () => {
        return(
            <>
            <Box className={`${styles.list} ${globalStyles.basicBox}`}>
                    <div className={`${styles.listItems} ${globalStyles.typoItemsInfo}`}>
                        <ul className={globalStyles.infoList}>
                        <Spinner/>
                        </ul>
                    </div>
            </Box>
            </>
        )
    };

    const hasData = !(isLoading || error);
    const errorMessage = error? <ErrorIndicator /> : null;
    const loading = isLoading? <PreloaderView /> : null;
    const renderedContent = !hasData? null : <ListView />;

    return(
            <div className={styles.listWrapper}>
                <div className={styles.listHeader}>
                    {`${props.itemType} List`}
                </div>

                {errorMessage}
                {loading}
                {renderedContent}
                
                <div className={styles.pagesNumbers}>
                    <PagesNums />
                    
                </div>
                        
            </div>
    )
    

};

export default ItemList;

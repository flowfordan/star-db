import styles from './ItemList.module.css';
import { Box } from '@mui/material';
import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import { Link, NavLink } from 'react-router-dom';
import { PagesNums } from './PagesNums';


const ItemList = (props) => {

    const {onPageChange} = props
    const {data} = props;

    const {itemList, isLoading, error, pagesCount, itemsPerPage, currentPage} = data;

    const listItems = itemList.map((item) => {
        const {id} = item;

        const label = props.renderItem(item);
        
        return (
            <li className={styles.listItem}
                    key={id}>
                <NavLink to={`${id}`} key={id}
                className={({isActive})=> isActive? styles.linkActive:styles.link}>
                    
                    {label}
                   
                </NavLink> 
                </li> 
                 
            
        )
    });   
    

    const ListView = () => {
        return(
            <>
                <Box className={styles.list}>
                            <ul className={styles.infoList}>
                                {listItems}
                            </ul>
                </Box>
            </>
        )
    };

    const PreloaderView = () => {
        return(
            <>
            <Box className={`${styles.list} ${styles.basicBox}`}>
                    <div className={`${styles.listItems} ${styles.typoItemsInfo}`}>
                        <ul className={styles.infoList}>
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

                <div className={styles.listContent}>
                    {errorMessage}
                    {loading}
                    {renderedContent}
                    
                    
                    <div className={styles.pagesNumbers}>
                        <PagesNums pagesCount={pagesCount} itemsPerPage={itemsPerPage}
                        currentPage={currentPage} onPageChange={onPageChange}/>
                        
                    </div>
                </div>
                
                        
            </div>
    )
    

};

export default ItemList;

import styles from './ItemList.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Box } from '@mui/material';
import React from 'react';
import Spinner from '../common/Spinner/Spinner';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';


const ItemList = (props) => {

    const {data} = props;

    const {itemList, isLoading, error} = data;

    const listItems = itemList.map((item) => {
        const {id} = item;

        let isItemActive = false;

        const label = props.renderItem(item);
        
        if(props.selectedItem == id){
            isItemActive = true}

        return (
            <li className={globalStyles.infoListGroup} 
            key={id}
            onClick={() => props.onItemSelected(id)}>
                <div className={isItemActive? globalStyles.infoListElSelected:globalStyles.infoListElSelect}>
                    {label}
                </div>
            </li>
        )
    });   
    

    const ListView = () => {
        return(
            <React.Fragment>
            <Box className={`${styles.list} ${globalStyles.basicBox}`}>
                    <div className={`${styles.listItems} ${globalStyles.typoItemsInfo}`}>
                        <ul className={globalStyles.infoList}>
                            {listItems}
                        </ul>
                    </div>
            </Box>
            </React.Fragment>
        )
    };

    const PreloaderView = () => {
        return(
            <React.Fragment>
            <Box className={`${styles.list} ${globalStyles.basicBox}`}>
                    <div className={`${styles.listItems} ${globalStyles.typoItemsInfo}`}>
                        <ul className={globalStyles.infoList}>
                        <Spinner/>
                        </ul>
                    </div>
            </Box>
            </React.Fragment>
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
                        
            </div>
    )
    

};

export default ItemList;

import styles from './ItemList.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import React from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';


export default class ItemList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: null,
            selectedItem: null,
            error: false,
            isLoading: true,
            
        }

        console.log(this.props)
    };


    componentDidMount(){
        const {getData} = this.props;
        getData().then((itemList) => {
            this.setState({
                itemList, 
                isLoading: false})
        }).catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
        isLoading: false})
    };



    render(){

    const {itemList, isLoading, error} = this.state;

    if(!itemList){
        return <Spinner/>
    }

    const listItems = itemList.map((person) => {

        let isItemActive = false
        
        if(this.props.selectedItem == person.id){
            isItemActive = true}

        return (
        <li className={globalStyles.infoListGroup} 
        key={person.id}
        onClick={() => this.props.onItemSelected(person.id)}>
            <div className={isItemActive? globalStyles.infoListElSelected:globalStyles.infoListElSelect}>
                {person.name}
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
                    Characters List
                </div>

                {errorMessage}
                {loading}
                {renderedContent}
                        
            </div>
        )
    };

};


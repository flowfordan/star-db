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
            peopleList: null,
            selectedItem: null,
            error: false,
            isLoading: true,
            
        }

    };

    swapiService = new SwapiService();

    componentDidMount(){
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList, 
                isLoading: false})
        }).catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
        isLoading: false})
    };



    render(){

    const {peopleList, isLoading, error} = this.state;

    if(!peopleList){
        return <Spinner/>
    }

    const listItems = peopleList.map((person) => {

        let isItemActive = false
        
        if(this.props.selectedPerson == person.id){
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


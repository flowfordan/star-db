import styles from './ItemList.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import React from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';


export default class ItemList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            peopleList: null,
            selectedItem: null,
        }

    };

    swapiService = new SwapiService();

    componentDidMount(){
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({peopleList})
        })
    };

    render(){

    const {peopleList} = this.state;

    console.log(this.props.selectedPerson)
    //this.props.selectedPerson

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
     })     
    
    return(
            <div className={styles.listWrapper}>
                <div className={styles.listHeader}>
                    ItemList
                </div>

                <Box className={`${styles.list} ${globalStyles.basicBox}`}>

                <div className={`${styles.listItems} ${globalStyles.typoItemsInfo}`}>
                                <ul className={globalStyles.infoList}>
                                    {listItems}
                                </ul>
                            </div>
                        </Box>
                        
                    </div>
        )
    };

};


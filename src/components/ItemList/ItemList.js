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

    


    if(!peopleList){
        return <Spinner/>
    }

    const listItems = peopleList.map((person) => {
        return (
        <li className={globalStyles.infoListGroup} 
        key={person.id}
        onClick={() => this.props.onItemSelected(person.id)}>
            <div className={globalStyles.infoListElSelect}>
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


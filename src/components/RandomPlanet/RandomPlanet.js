import styles from './RandomPlanet.module.css'
import { Box } from '@mui/material';
import globalStyles from '../../style/globalStyles.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import SwapiService from '../../services/swapiService';


export default class RandomPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null
          };

        this.updatePlanet()
    };

    swapiService = new SwapiService();

    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
        .then((planet) => {
            this.setState({
                id: id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render(){

        const {id, name, population, 
            rotationPeriod, diameter} = this.state;

        return (
            <div className={styles.cardWrapper}>
                <div className={styles.cardHeader}>
                    Random Planet
                </div>
                <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                    <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                        {name}
                    </div>
    
                    <div className={styles.cardImage}>
                        <img  className={styles.cardImageBody} 
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}>
                        </img>
                    </div>
    
                    <div className={`${styles.cardInfo} ${globalStyles.typoItemsInfo}`}>
                        <ul className={globalStyles.infoList}>
    
                            <li className={globalStyles.infoListGroup}>
                                <span className={globalStyles.infoListTerm}>
                                    Population
                                </span>
                                <span className={globalStyles.infoListEl}>
                                    {population}
                                </span>
                            </li>
                            <li className={globalStyles.infoListGroup}>
                                <span className={globalStyles.infoListTerm}>
                                    Rotation Period
                                </span>
                                <span className={globalStyles.infoListEl}>
                                    {rotationPeriod}
                                </span>
                            </li>
                            <li className={globalStyles.infoListGroup}>
                                <span className={globalStyles.infoListTerm}>
                                    Diameter
                                </span>
                                <span className={globalStyles.infoListEl}>
                                    {diameter}
                                </span>
                            </li>
    
                        </ul>
                    </div>
    
                </Box>
            </div>
        )
    }
};

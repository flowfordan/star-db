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
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';


export default class RandomPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            isLoading: true,
            error: false,
          };

        this.updatePlanet()
    };

    swapiService = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({planet,
        isLoading: false})
    };


    onError = (err) => {
        this.setState({
            error: true,
        isLoading: false})
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }

    render(){

        const {planet, isLoading, error} = this.state;
        
        const PlanetView = ({ planet }) => {

            const {id, name, population, 
                rotationPeriod, diameter} = planet;

            return(
                <React.Fragment>
                    <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                        <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                            {name}
                        </div>
        
                        <div className={styles.cardImage}>
                            <img  className={styles.cardImageBody}
                            alt="Image of Planet" 
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


                </React.Fragment>
            )
        };

        const PreloaderView = () => {
            return(
                <React.Fragment>
                    <Box className={`${styles.card} ${globalStyles.basicBox}`}>

                        <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                            <Spinner/>
                        </div>
        
                        <div className={styles.cardImage}>
                            <Spinner/>
                        </div>
        
                        <div className={`${styles.cardInfo} ${globalStyles.typoItemsInfo}`}>
                            <Spinner/>
                        </div>
        
                    </Box>
                </React.Fragment>
            )
        };



        const hasData = !(isLoading || error);
        const errorMessage = error? <ErrorIndicator/> : null;
        const loading = isLoading? <PreloaderView /> : null;
        const renderedContent = !hasData? null : <PlanetView planet={planet}/>;

        return (
            <div className={styles.cardWrapper}>
                         <div className={styles.cardHeader}>
                             Random Planet
                         </div>
                        {errorMessage}
                        {loading}
                        {renderedContent}

                     </div>
        )

        // if(isLoading){
        //     return (
        //         <div className={styles.cardWrapper}>
        //             <div className={styles.cardHeader}>
        //                 Random Planet
        //             </div>

        //             <PreloaderView />
        //         </div>
        //     )
        // };
           
        // return (
        //     <div className={styles.cardWrapper}>
        //             <div className={styles.cardHeader}>
        //                 Random Planet
        //             </div>

        //             <PlanetView planet={planet}/>
        //     </div>
        // );

    }
}

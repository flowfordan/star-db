import styles from './PersonDetails.module.css'
import { Box } from '@mui/material';
import globalStyles from '../../style/globalStyles.module.css'
import React from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';


export default class PersonDetails extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
        person: null,
        isLoading: true,
        error: false
    }
    };

    swapiService = new SwapiService();

    componentDidMount(){
        this.updatePerson();
    };


    componentDidUpdate(prevProps){
        if(this.props.personId != prevProps.personId){
           this.updatePerson();
           this.setState({isLoading: true})
        }
        
    };

    updatePerson(){
        const {personId} = this.props;
        
        if(!personId) {
            return;
        }

        this.swapiService.getPerson(personId)
        .then((person) => {
            this.setState({person, isLoading: false})
        }).catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
        isLoading: false})
    };

    render(){

        if(!this.state.person){
            return(
                <div>Select item on the list</div>
            )
        }

        

        const CharacterView = () => {

            const {id, name, gender, birthYear, eyeColor} = this.state.person;

            return(
                <React.Fragment>
                    <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                    {name}
                </div>
                <div className={styles.cardImage}>
                    <img  className={styles.cardImageBody}
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="Character">
                    </img>
                </div>
                
                <div className={`${styles.cardInfo} ${globalStyles.typoItemsInfo}`}>
                    <ul className={globalStyles.infoList}>
        
                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>
                                Gender
                            </span>
                            <span className={globalStyles.infoListEl}>
                                {gender}
                            </span>
                        </li>
                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>
                                Birth Year
                            </span>
                            <span className={globalStyles.infoListEl}>
                                {birthYear}
                            </span>
                        </li>
                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>
                                Eye Color
                            </span>
                            <span className={globalStyles.infoListEl}>
                                {eyeColor}
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
                    <Box className={globalStyles.basicBox}>
                        <Spinner />
                    </Box>
                </React.Fragment>

            )
        };

        const {isLoading, error} = this.state;

        const hasData = !(isLoading || error);
        const errorMessage = error? <ErrorIndicator /> : null;
        const loading = isLoading? <PreloaderView /> : null;
        const renderedContent = !hasData? null : <CharacterView />;

        return(
            <div className={styles.cardWrapper}>
            <div className={`${globalStyles.typoChunkHeader} ${styles.cardHeader}`}>
                Character
            </div>
                {errorMessage}
                {loading}
                {renderedContent}          
            </div> 
        )
    }

};

import styles from './ItemDetails.module.css'
import { Box } from '@mui/material';
import globalStyles from '../../style/globalStyles.module.css'
import React from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';


export default class ItemDetails extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
        currentItem: null,
        image: null,
        isLoading: true,
        error: false
    }
    };

    swapiService = new SwapiService();

    componentDidMount(){
        this.updateItem();
    };


    componentDidUpdate(prevProps){
        if(this.props.itemId != prevProps.itemId){
           this.updateItem();
           this.setState({isLoading: true})
        }
        
    };

    updateItem(){
        const {itemId, getData, getImageUrl} = this.props;
        
        if(!itemId) {
            return;
        }

        getData(itemId)
        .then((currentItem) => {
            this.setState({
            currentItem, 
            isLoading: false,
            image: getImageUrl(currentItem)})
        }).catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
        isLoading: false})
    };

    render(){

        if(!this.state.currentItem){
            return(
                <div>Select item on the list</div>
            )
        }

        

        const CharacterView = () => {

            const {currentItem, image} = this.state;

            const {id, name, gender, birthYear, eyeColor} = currentItem;

            return(
                <React.Fragment>
                    <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                    {name}
                </div>
                <div className={`${styles.cardImage} ${globalStyles.cardObjBackground}`} >
                    <img  className={styles.cardImageBody}
                    src={image}
                    alt="Character">
                    </img>
                </div>
                
                <div className={`${styles.cardInfo} 
                ${globalStyles.typoItemsInfo} ${globalStyles.cardObjBackground}`}>
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

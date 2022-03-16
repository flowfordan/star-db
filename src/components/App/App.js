import React from 'react';
import CharactersPage from '../CharactersPage/CharactersPage';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css';
import { SwapiServiceProvider } from '../../swapiServiceContext/swapiServiceContext';


export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            hasError: false,
        }
    };

    componentDidCatch(){
        this.setState({hasError: true});
    };


    render(){

        if(this.state.hasError){
            return(
                <ErrorIndicator />
            )
        };

        return(
        <SwapiServiceProvider value={this.swapiService}>
            <div className={styles.appWrapper}>
                <div className={styles.header}>
                    <Header />
                </div>

                <div className={styles.body}>
                    <div className={styles.itemRandom}>
                        <RandomPlanet />
                    </div>

                    <CharactersPage />
                    
                </div>
            </div> 
        </SwapiServiceProvider>  
        )

    };
};

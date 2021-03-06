import React from 'react';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import {Header} from '../Header/Header';
import { Footer } from '../Footer/Footer';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css';
import { SwapiServiceProvider } from '../../swapiServiceContext/swapiServiceContext';
import StarshipsPage from '../ItemsPage/StarshipsPage';
import PlanetsPage from '../ItemsPage/PlanetsPage';
import CharactersPage from '../ItemsPage/CharactersPage';
import WelcomePage from '../PagesComponents/WelcomePage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

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
            <Router basename='/star-db'>

                <div className={styles.appWrapper}>

                    <div className={styles.header}>
                        <Header />
                    </div>
                    
                    

                    <div className={styles.body}>
                        
                        <div className={styles.itemRandom}>
                            <RandomPlanet />
                        </div>

                        <div className={styles.items}>
                            <Routes>
                                <Route path='/' element={<WelcomePage />}></Route>
                                <Route path='/characters/*' element={<CharactersPage/>}></Route>
                                <Route path='/planets/*' element={<PlanetsPage/>}></Route>
                                <Route path='/starships/*' element={<StarshipsPage/>}></Route>
                                <Route path='*' element={<h2>404. Wrong page</h2>}></Route>
                            </Routes>  
                        </div>  
                        
                    </div>

                    <div className={styles.footer}>
                        <Footer />
                    </div>
                    
                </div> 
                </Router>
                
        </SwapiServiceProvider>  
        )

    };
};

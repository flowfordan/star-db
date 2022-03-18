import React from 'react';
import ErrorIndicator from '../common/ErrorIndicator/ErrorIndicator';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css';
import { SwapiServiceProvider } from '../../swapiServiceContext/swapiServiceContext';
import StarshipsPage from '../ItemsPage/StarshipsPage';
import PlanetsPage from '../ItemsPage/PlanetsPage';
import CharactersPage from '../ItemsPage/CharactersPage';
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
            <Router>

                <div className={styles.appWrapper}>
                    <div className={styles.header}>
                        <Header />
                    </div>
                    
                    

                    <div className={styles.body}>
                        <div className={styles.itemRandom}>
                            <RandomPlanet />
                        </div>
                        <Routes>
                        
                        <Route path='/' element={<h2>Privet</h2>}></Route>
                        <Route path='/characters/*' element={<CharactersPage/>}></Route>
                        <Route path='/planets/*' element={<PlanetsPage/>}></Route>
                        <Route path='/starships/*' element={<StarshipsPage/>}></Route>
                        <Route path='*' element={<h2>404!!!!</h2>}></Route>
                        </Routes>    
                        
                    </div>

                    

                    
                </div> 
                </Router>
                
        </SwapiServiceProvider>  
        )

    };
};

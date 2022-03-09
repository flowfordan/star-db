import React from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css'


export default class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPerson: null,
        }
    };


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };

    render(){
        return(
         <div className={styles.appWrapper}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.body}>
                <div className={styles.itemRandom}>
                    <RandomPlanet />
                </div>
                <div className={styles.items}>
                    <div className={styles.itemsList}>
                        <ItemList onItemSelected={this.onPersonSelected}
                        selectedPerson={this.state.selectedPerson}/>
                    </div>
                    <div className={styles.itemInfo}>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        </div>   
        )

    };
};

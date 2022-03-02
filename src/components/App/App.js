import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.body}>
                <div className={styles.itemRandom}>
                    <RandomPlanet />
                </div>
                <div className={styles.items}>
                    <ItemList />
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
};

export default App

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import styles from './App.module.css'

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />
            <ItemList />
            <PersonDetails />
        </div>
    )
};

export default App

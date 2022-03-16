import styles from './Header.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <Link to="/">
            <div className={styles.headerLogo}>
                Logo
            </div>
            </Link>
            <div className={styles.headerMenuWrapper}>
                <div className={`${styles.headerMenu} ${globalStyles.navBar}`}>
                    
                    <Link to="/characters" className={styles.menuItem}>
                        <span>Characters</span>
                    </Link>
                    
                    <Link to="/starships" className={styles.menuItem}>
                        <span >Starships</span>
                    </Link>
                    <Link to="/planets" className={styles.menuItem}>
                        <span >Planets</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header

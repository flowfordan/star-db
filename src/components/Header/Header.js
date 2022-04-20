import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {HeaderLogo} from './HeaderLogo';


export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <NavLink to="/">
                <div className={styles.headerLogo}>
                    <HeaderLogo />
                </div>
            </NavLink>

            <div className={styles.headerMenuWrapper}>
                <div className={styles.headerMenu}>
                    
                    <NavLink to="/characters" className={({isActive})=> isActive? styles.menuItemActive : styles.menuItem}>
                        <span>Characters</span>
                    </NavLink>
                    
                    <NavLink to="/starships" className={({isActive})=> isActive? styles.menuItemActive : styles.menuItem}>
                        <span >Starships</span>
                    </NavLink>

                    <NavLink to="/planets" className={({isActive})=> isActive? styles.menuItemActive : styles.menuItem}>
                        <span >Planets</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};


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
                <div className={`${styles.headerMenu}`}>
                    
                    <NavLink to="/characters" 
                    >
                        <span>Characters</span>
                    </NavLink>
                    
                    <NavLink to="/starships"
                    >
                        <span >Starships</span>
                    </NavLink>

                    <NavLink to="/planets" 
                    >
                        <span >Planets</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};


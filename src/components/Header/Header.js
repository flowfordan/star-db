import styles from './Header.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { NavLink } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';


const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <NavLink to="/">
            <div className={styles.headerLogo}>
                <HeaderLogo />
            </div>
            </NavLink>
            <div className={styles.headerMenuWrapper}>
                <div className={`${styles.headerMenu} 
                ${globalStyles.navBar} ${globalStyles.basicBox}`}>
                    
                    <NavLink to="/characters" 
                    className={({isActive})=> isActive? 
                    globalStyles.menuItemSelected:globalStyles.menuItem}>
                        <span>Characters</span>
                    </NavLink>
                    
                    <NavLink to="/starships"
                    className={({isActive})=> isActive? 
                    globalStyles.menuItemSelected:globalStyles.menuItem}>
                        <span >Starships</span>
                    </NavLink>
                    <NavLink to="/planets" 
                    className={({isActive})=> isActive? 
                    globalStyles.menuItemSelected:globalStyles.menuItem}>
                        <span >Planets</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Header

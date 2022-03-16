import styles from './Header.module.css';
import globalStyles from '../../style/globalStyles.module.css'

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>
                Logo
            </div>
            <div className={styles.headerMenuWrapper}>
                <div className={`${styles.headerMenu} ${globalStyles.navBar}`}>
                    <a href="/characters">
                        <span  className={styles.menuItem}>Characters</span>
                    </a>
                    <span className={styles.menuItem}>Starships</span>
                    <span className={styles.menuItem}>Planets</span>
                </div>
            </div>
        </div>
    )
};

export default Header

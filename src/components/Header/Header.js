import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>Logo</div>
            <div className={styles.headerMenu}>Menu</div>
        </div>
    )
};

export default Header

import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <span className={styles.footerInfo}>
                powered by <a href='https://swapi.dev/'>swapi.dev</a> API
            </span>

            <span className={styles.footerCredits}>
                STAR WARS DB created by <a href='https://github.com/flowfordan'>flowfordan</a>, 2022
            </span>
        </div>
    )
}

export {Footer} 
import styles from './PageContainer.module.css'

const WelcomePage = () => {
    return(
        <div className={styles.pageWrapper}>
            <h2>Welcome to STAR WARS DB!</h2>
            <p>This data base working with open API containing data of STAR WARS films series: characters, starhips, planets etc. 
                Please choose category on the menu to begin</p>
        </div>
    )
}

export default WelcomePage
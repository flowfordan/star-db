import styles from './RandomPlanet.module.css'

const RandomPlanet = () => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
                Random Planet
            </div>
            <div className={styles.card}>
                <div className={styles.cardName}>
                    Name
                </div>
                <div className={styles.cardImage}>
                    Picture
                </div>
                <div className={styles.cardInfo}>
                    Information
                </div>
            </div>
        </div>
    )
};

export default RandomPlanet

import styles from './PersonDetails.module.css'
import { Box } from '@mui/material';
import globalStyles from '../../style/globalStyles.module.css'


const PersonDetails = () => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
                Random Planet
            </div>
            <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                <div className={styles.cardName}>
                    Name
                </div>
                <div className={styles.cardImage}>
                    Picture
                </div>
                <div className={styles.cardInfo}>
                    Information
                </div>
            </Box>
        </div>
    )
};

export default PersonDetails

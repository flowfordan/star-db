import styles from './RandomPlanet.module.css'
import { Box } from '@mui/material';
import globalStyles from '../../style/globalStyles.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const RandomPlanet = () => {

    //population
    //rotation
    //diameter




    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
                Random Planet
            </div>
            <Box className={`${styles.card} ${globalStyles.basicBox}`}>
                <div className={`${styles.cardName} ${globalStyles.typoItemName}`}>
                    Name
                </div>

                <div className={styles.cardImage}>
                    <img  className={styles.cardImageBody} src='https://www.w3schools.com/css/paris.jpg'>
                    </img>
                </div>

                <div className={`${styles.cardInfo} ${globalStyles.typoItemsInfo}`}>
                    <ul className={globalStyles.infoList}>

                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>Population</span>
                            <span className={globalStyles.infoListEl}>1234</span>
                        </li>
                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>Rotation Period</span>
                            <span className={globalStyles.infoListEl}>43</span>
                        </li>
                        <li className={globalStyles.infoListGroup}>
                            <span className={globalStyles.infoListTerm}>Diameter</span>
                            <span className={globalStyles.infoListEl}>999</span>
                        </li>

                    </ul>
                </div>

            </Box>
        </div>
    )
};

export default RandomPlanet

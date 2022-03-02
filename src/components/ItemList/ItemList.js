import styles from './ItemList.module.css';
import globalStyles from '../../style/globalStyles.module.css';
import { Box } from '@mui/material';

const ItemList = () => {
    return (
        <div className={styles.listWrapper}>
            <div className={styles.listHeader}>
                ItemList
            </div>
            <Box className={`${styles.list} ${globalStyles.basicBox}`}>
                <div className={styles.listItems}>
                    item1
                    item 2
                </div>
            </Box>
            
        </div>
    )
};

export default ItemList


import React from "react";
import styles from './ItemsPage.module.css';




const Row = ({ left, right }) => {
    return(
        <div className={styles.items}>
            <div className={styles.itemsList}>
                {left}
            </div>
            <div className={styles.itemInfo}>
                {right} 
            </div>
        </div>  
    );
};

export default Row;

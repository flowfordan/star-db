import React from "react";
import spinnerAnim from '../../../common/Double Ring-1.5s-200px.svg';
import styles from './Spinner.module.css'

const Spinner = () => {
    return(
        <div className={styles.spinnerWrapper}>
            <img src={spinnerAnim} height='30'></img>
        </div>
    )
}

export default Spinner

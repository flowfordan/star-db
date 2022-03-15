import React from "react";
import spinnerAnim from '../../../common/Double Ring-1.5s-200px.svg';
import globalStyles from '../../../style/globalStyles.module.css';

const Spinner = () => {
    return(
        <div className={globalStyles.preloaderContainer}>
            <img src={spinnerAnim} height='30'></img>
        </div>
    )
}

export default Spinner

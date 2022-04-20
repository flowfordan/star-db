import React from 'react';
import styles from './HeaderLogo.module.css';

export const HeaderLogo = () => {

    //some meh spanning
    const phrase = `STAR WARS DB`
    const phraseArr = phrase.split(' ');
    const logoLetters = phraseArr.map((letter, idx) => {
        return <span key={idx} className={idx === 2? styles.letterWrapperAdd : styles.letterWrapper}>{letter}</span>
    })


    return(
    <>
        <div className={styles.logoWrapper}>
            {logoLetters}
        </div>
        
    </>
    )

};

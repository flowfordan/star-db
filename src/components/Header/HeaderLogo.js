import React from 'react';
import styles from './HeaderLogo.module.css';

export const HeaderLogo = () => {

    const phrase = `STAR WARS DB`
    const phraseArr = phrase.split('')
    const logoLetters = phraseArr.map((letter, idx) => {
        return <span key={idx} className={styles.letterWrapper}>{letter}</span>
    })


    return(
    <>
        <div>
            {logoLetters}
        </div>
        
    </>
    )

};

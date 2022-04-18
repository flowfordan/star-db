import React from 'react';
import styles from './HeaderLogo.module.css';

export const HeaderLogo = () => {

    const phrase = `STAR WARS DB`
    const phraseArr = phrase.split('')
    console.log(phraseArr)
    const logoLetters = phraseArr.map(letter => {
        return <span className={styles.letterWrapper}>{letter}</span>
    })


    return(
    <>
        <div>
            {logoLetters}
        </div>
        
    </>
    )

};

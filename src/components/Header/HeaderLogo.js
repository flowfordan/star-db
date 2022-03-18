import React from 'react';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {

let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

const word = 'STAR WARS'
const wordArr = word.split('')



let typesArr = [];

for (let i=0; i< wordArr.length; i++){
        typesArr.push(Math.round(Math.random()))
    }

const updateTypes = (arr1, arr2) => {
        arr2 = []
        for (let i=0; i< arr1.length; i++){
            arr2.push(Math.round(Math.random()))
        }

        console.log('timer', arr2)
    };

    
    
console.log('Array',typesArr)

setInterval(() => updateTypes(wordArr, typesArr), 90000)

let zippedArray = zip(wordArr, typesArr)

console.log(zippedArray)




const logoLetters = zippedArray.map((item) => {
    

       return(
            <span className={item[1] == 1 ? 
            styles.letterChunkWrapperStretch : styles.letterChunkWrapper}>
                <span className={item[1] == 1 ? 
            styles.letterChunkStretch : styles.letterChunk}>
                    {item[0]}
                </span>
            </span>
       ) 
    }   
)


    

    console.log(wordArr)

    return(
    <React.Fragment>
        <div className={styles.logoWrapper}>
            {logoLetters}
            
        </div>
        
    </React.Fragment>
    )

};

export default HeaderLogo
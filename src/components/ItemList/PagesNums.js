import styles from './PagesNums.module.css';

export const PagesNums = (props) => {

    const {currentPage, pagesCount, itemsPerPage, onPageChange} = props;
    console.log('pagesNum', props)

    //current page
    //max pages
    //min = 1
    //callback to change
    let numberArr = [currentPage - 1, currentPage, currentPage + 1];
    if(currentPage === 1){
        numberArr = [currentPage, currentPage + 1]
    }
    else if(currentPage === pagesCount){
        numberArr = [currentPage - 1, currentPage]
    }

    let numbersRender = numberArr.map((item, idx) => {
        return(
            <span key={idx} className={styles.pagenumRegular} onClick={() => onPageChange(item)}>{item}</span>
        )
    });

    return(
        <div className={styles.numsWrapper}>
        <span onClick={() => onPageChange(1)}>{`<<`}</span>
            {numbersRender}
         <span onClick={() => onPageChange(pagesCount)}>{`>>`}</span>
        </div>
    )
}
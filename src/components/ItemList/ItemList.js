import styles from './ItemList.module.css'

const ItemList = () => {
    return (
        <div className={styles.listWrapper}>
            <div className={styles.listHeader}>
                ItemList
            </div>
            <div className={styles.list}>
                <div className={styles.listItems}>
                    item1
                    item 2
                </div>
            </div>
            
        </div>
    )
};

export default ItemList


import styles from '../styles/Trends.module.css'

function Trends () {

    return (
        <div className={styles.trends}>
        <h2 className={styles.title}> Trends </h2>
        <div className={styles.hashtags}> 
            <div className={styles.bloc}>
                <p className={styles.text}> #lospolloshermanos</p>
                <p className={styles.counterHash}>hashtags.length Tweets</p>
            </div>
            <div className={styles.bloc}>
                <p className={styles.text}> #lospolloshermanos</p>
                <p className={styles.counterHash}>hashtags.length Tweets</p>
            </div>
            <div className={styles.bloc}>
                <p className={styles.text}> #lospolloshermanos</p>
                <p className={styles.counterHash}>hashtags.length Tweets</p>
            </div>
        </div>
        </div>
    )
}

export default Trends
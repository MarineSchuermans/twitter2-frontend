import styles from '../styles/Tweet.module.css';

function Tweet () {
    return (
    <div className={styles.tweet}>
        <h2 className={styles.home}> Home </h2>
        <input type= 'text' placeholder="What's up ?" className={styles.writeTweet} maxLength='280' />
        <div className={styles.countAndBtn}>
            <p className={styles.counter}>input.length/280</p>
            <button type='button' className={styles.btnTweet}>Tweet</button>
        </div>
    </div>

    )

}

export default Tweet;
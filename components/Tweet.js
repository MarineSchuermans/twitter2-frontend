import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Tweet () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    // console.log(user)

    const [count, setCounter] = useState (0)

    const publishNewTweet = () => {
        fetch('http://localhost:3000/tweet', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: user.firstname, username: user.username, }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

   


    return (
    <div className={styles.tweet}>
        <h2 className={styles.home}> Home </h2>
        <input 
        type= 'text' 
        placeholder="What's up ?" 
        className={styles.writeTweet} 
        maxLength='280' 
        onChange={e => setCounter(e.target.value.length)}
        />
        <div className={styles.countAndBtn}>
            <p className={styles.counter}>{count}/280</p>
            <button onClick={() => publishNewTweet()} type='button' className={styles.btnTweet}>Tweet</button>
        </div>
    </div>

    )

}

export default Tweet;
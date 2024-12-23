import styles from '../styles/Tweet.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet } from '../reducers/tweet'

function Tweet () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)

    


    console.log(user)

    const [count, setCounter] = useState (0)
    const [tweet, setTweet] = useState ('')
    console.log(tweet)

    const publishNewTweet = () => {
        if (count > 0){
            fetch('http://localhost:3000/tweet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: user.token, content: tweet}),
            }).then(response => response.json())
                .then(data => {
                    if (data.result){
                        dispatch(addNewTweet())
                        console.log('Tweet published')
                    } else {
                        console.log('Try Again')
                    }
                })
        }
    }



   


    return (
    <div className={styles.tweet}>
        <h2 className={styles.home}> Home </h2>
        <input 
        type= 'text' 
        placeholder="What's up ?" 
        className={styles.writeTweet} 
        maxLength='280' 
        onChange={e => setCounter(e.target.value.length) & setTweet(e.target.value)}
        />
        <div className={styles.countAndBtn}>
            <p className={styles.counter}>{count}/280</p>
            <button onClick={() => publishNewTweet()} type='button' className={styles.btnTweet}>Tweet</button>
        </div>
    </div>

    )

}

export default Tweet;
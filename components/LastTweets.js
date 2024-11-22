import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function LastTweet(props) {
    const [allTweets, setAllTweets] = useState([])
    // console.log({allTweets})

    const user = useSelector((state) => state.user.value)

    const value = useSelector((state) => state.tweet.value)
    console.log(user)


    // const likesTweet = articlesData.map((data, i) => {
    //     const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title);
    //     return <Article key={i} {...data} isBookmarked={isBookmarked} />;
    //   });





    //Liker



    const likeTweet = () => {
        fetch('http://localhost:3000/tweet/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user.username, token: user.token }),

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {

        fetch('http://localhost:3000/tweet/allTweet')
            .then(response => response.json())
            .then(data => {
                console.log(data.token)
                if (data.tweets.length > 0) {
                    setAllTweets(data.tweets)
                    // console.log(infos)

                }
            })

    }, [value])

    const tweetDisplay = allTweets.map((infos, i) => {

        
        let isTrash
        const deleteTweet = () => {
            fetch('http://localhost:3000/tweet', {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    data.remove()
                })

        }
        // faire apparaitre la trash 
        if (user._id === infos.user._id) {
            isTrash = <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} className={styles.icone} onClick={() => deleteTweet()} />
        } else {
            isTrash = ''
        }
        return (
            <div key={i}>
                <div className={styles.lastTweet}>
                    <div className={styles.userInfos}>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} className={styles.icone} />
                        <div className={styles.typo}>
                            <p className={styles.name}> {infos.user.firstname} </p>
                            <p className={styles.infos}> @{infos.user.username} </p>
                            <p className={styles.infos}>{infos.created}</p>
                        </div>
                    </div>
                    <div>
                        <p className={styles.text}> {infos.content} </p>
                        <div className={styles.likes}>
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} className={styles.heart} onClick={() => likeTweet()} />
                            <p className={styles.counter}>{infos.likes.length}</p>
                            {isTrash}
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )

    })

console.log(allTweets)



    return (
        <div>
            {tweetDisplay}

        </div>


    )
}

export default LastTweet
import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function LastTweet(){
    const [allTweets, setAllTweets] = useState('')

    //useState allTweets

    // let allTweets = <p>No Tweet</p>

   useEffect(() => {
       fetch('http://localhost:3000/tweet/allTweet')
       .then(response => response.json())
       .then(data => {
           // console.log(data)
           if (data.tweets.length > 0){
                setAllTweets( data.tweets.map((infos, i) => {
                   // console.log(infos.content)
                   return ( 
                       <div key={i}>
                           <div className={styles.lastTweet}>
                           <div className={styles.userInfos}>
                               <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.icone} />
                               <div className={styles.typo}>
                                   <p className={styles.name}> {infos.user.firstname} </p>
                                   <p className={styles.infos}> @{infos.user.username} </p>
                                   <p className={styles.infos}>2 hours</p>
                               </div>
                           </div>
                       <div>
                       <p className={styles.text}> {infos.content} </p>
                       <div className={styles.likes}>
                           <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} className={styles.heart} />
                           <p className={styles.counter}>{infos.likes.length}</p>
                       </div>
                       </div>
                   </div>
                   <hr/> 
                       </div>
                   )
                
               })
            )
           }
       })

   }, [])
    

console.log(allTweets)



    return (
        <div> 
            {allTweets}
            {/* <div className={styles.lastTweet}>
                <div className={styles.userInfos}>
                    <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.icone} />
                    <div className={styles.typo}>
                        <p className={styles.name}> UserName</p>
                        <p className={styles.infos}>@username</p>
                        <p className={styles.infos}>2 hours</p>
                    </div>
                </div>
            <div>
             <p className={styles.text}> Tweet Posté #GG </p>
             <div className={styles.likes}>
                <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} className={styles.heart} />
                <p className={styles.counter}>0</p>
             </div>
            </div>
           </div>
           <hr/> */}
        </div>
 

    )
}

export default LastTweet
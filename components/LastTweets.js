import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart} from '@fortawesome/free-solid-svg-icons'

function LastTweet(){

    return (
        <div> 
            <div className={styles.lastTweet}>
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
           <hr/>
        </div>
 

    )
}

export default LastTweet
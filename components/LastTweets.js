import styles from '../styles/LastTweets.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart} from '@fortawesome/free-solid-svg-icons'

function LastTweet(){

    return (
        <div>
            <div className={styles.userInfos}>
                <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.icone} />
                <p className={styles.pseudo}> UserName</p>
                <p className={styles.name}>@username</p>
                <p className={styles.hours}>2 hours</p>
            </div>
        <div>
         <p> Tweet Posté #GG </p>
         <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} className='icons' />
        <p>0</p>
        </div>
       <hr/>
       </div>
 

    )
}

export default LastTweet
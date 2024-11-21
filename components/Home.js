import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Tweet from './Tweet'
import LastTweet from './LastTweets';
import Trends from './Trends';
import Hashtags from './Hashtags';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'




function Home() {
  return (
  <div className = {styles.main}>
    
      <div className={styles.left}>
        <div className={styles.logoTwitter}>
        <FontAwesomeIcon icon={faTwitter} rotation={180} style={{color: "#ffffff",}} className={styles.twitter} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userLogo}>
          <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.userImg} />
          </div>
            <div> 
                <p>Pseudo</p>
                <p>@username</p>
                <button type='button'>Logout</button>
            </div>
        </div>
      </div> 
    
        <hr />


    <div className={styles.middle}> 
      <Tweet />
      <hr/>
      <LastTweet/>
    </div>

    <hr/>

    <div className={styles.right}>

      <Trends />
    </div>

  </div>


  );
}

export default Home;

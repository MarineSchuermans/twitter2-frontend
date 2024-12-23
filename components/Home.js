import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Tweet from './Tweet'
import LastTweet from './LastTweets';
import Trends from './Trends';
import Hashtag from './hashtag';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout} from '../reducers/user'
import Link from 'next/link';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
console.log(user.username)
  const handleLogout = () => {
    dispatch(logout())
    return 
  }
  return (
  <div className = {styles.main}>

  <div className={styles.left}>
    <div className={styles.logoTwitter}>
    <Link href='/'>
          <FontAwesomeIcon
            icon={faTwitter}
            rotation={180}
            style={{ color: '#ffffff' }}
            className={styles.twitter}
          /></Link>
    </div>
    <div className={styles.userInfo}>
      <div className={styles.userLogo}>
      <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.userImg} />
      </div>
        <div> 
            <p>{user.firstname}</p>
            <p>@{user.username}</p>
            <Link href='/login'><button onClick={() => handleLogout ()} type='button'>Logout</button></Link>
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

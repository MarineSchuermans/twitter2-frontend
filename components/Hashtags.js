import Tweet from './Tweet';
import styles from '../styles/Tweet.module.css';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Home from './Home';

function Hashtags() {
  const trends = useSelector((state) => state.trends);

  return (
    <div className={styles.tweet}>
        <h2 className={styles.home}> Hashtags </h2>
        <input type= 'text' placeholder="🔎 Search" className={styles.writeTweet} maxLength='280' />
        <div className={styles.trendsList}>
      </div>
    </div>

    )
}

export default Hashtags;